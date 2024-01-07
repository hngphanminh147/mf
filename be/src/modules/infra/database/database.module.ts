import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@infra/config/config.service';
import { IDatabaseConfig, IDynamicDatabaseOptions } from './interface';

@Module({})
export class DynamicDatabaseModule {
  static registerAsync(options?: IDynamicDatabaseOptions): DynamicModule {
    const { isGlobal } = options ?? { isGlobal: false };

    return {
      module: DynamicDatabaseModule,
      imports: [
        TypeOrmModule.forRootAsync({
          useFactory: (configService: ConfigService) => {
            const config = configService.get<IDatabaseConfig>('database');
            return {
              type: 'postgres',
              ...config,
            };
          },
          inject: [ConfigService],
        }),
      ],
      global: isGlobal,
    };
  }
}
