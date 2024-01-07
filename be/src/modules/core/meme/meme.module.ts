import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemeService } from './meme.service';
import { MemeController } from './meme.controller';
import { MemeEntity, TextBoxEntity } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([MemeEntity, TextBoxEntity])],
  controllers: [MemeController],
  providers: [MemeService],
})
export class MemeModule {}
