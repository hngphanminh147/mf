import { CommonModule } from '@core/common/common.module';
import { MemeModule } from '@core/meme/meme.module';
import { DynamicConfigModule } from '@infra/config/config.module';
import { defaultProjectConfig } from '@infra/config/project.config';
import { databaseConfig } from '@infra/database';
import { DynamicDatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    DynamicConfigModule.registerAsync({
      isGlobal: true,
      load: [databaseConfig, defaultProjectConfig],
    }),
    DynamicDatabaseModule.registerAsync(),
    CommonModule,
    MemeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
