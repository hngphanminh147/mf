import { CommonModule } from '@core/common';
import { MemeModule } from '@core/meme';
import { DynamicConfigModule, defaultProjectConfig } from '@infra/config';
import { DynamicDatabaseModule, databaseConfig } from '@infra/database';
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
