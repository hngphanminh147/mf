import { Module } from '@nestjs/common';
import { CustomLogger } from './logger';

@Module({
  exports: [CustomLogger],
  providers: [CustomLogger],
})
export class CommonModule {}
