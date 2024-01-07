import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService as NestJsConfigService } from '@nestjs/config';
import type { ConfigModuleOptions } from '@nestjs/config';
import { ConfigService } from './config.service';

@Module({})
export class DynamicConfigModule {
  static registerAsync(options?: ConfigModuleOptions): DynamicModule {
    const { isGlobal, envFilePath, load } = options || {};

    return {
      module: DynamicConfigModule,
      imports: [
        ConfigModule.forRoot({
          envFilePath: envFilePath ?? `${process.cwd()}/.local.env`,
          load,
        }),
      ],
      providers: [
        {
          provide: ConfigService,
          useFactory: (nestJsConfigService: NestJsConfigService) => new ConfigService(nestJsConfigService),
          inject: [NestJsConfigService],
        },
      ],
      exports: [ConfigService],
      global: isGlobal,
    };
  }
}
