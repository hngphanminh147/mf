import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemeEntity, TextBoxEntity } from './entities';
import { MemeController } from './meme.controller';
import { MemeRepository } from './meme.repository';
import { MemeService } from './meme.service';

@Module({
  imports: [TypeOrmModule.forFeature([MemeEntity, TextBoxEntity])],
  controllers: [MemeController],
  providers: [MemeService, MemeRepository],
})
export class MemeModule {}
