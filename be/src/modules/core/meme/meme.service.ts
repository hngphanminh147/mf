import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateMemeDto } from './dto/create-meme.dto';
import { UpdateMemeDto } from './dto/update-meme.dto';
import { MemeEntity } from './entities';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MemeService {
  constructor(@InjectRepository(MemeEntity) private readonly repository: Repository<MemeEntity>) {}

  create(createMemeDto: CreateMemeDto): Promise<MemeEntity> {
    return this.repository.save(createMemeDto);
  }

  findAll(): Promise<MemeEntity[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<MemeEntity> {
    const existedEntity = await this.repository.findOne({ where: { id } });
    if (!existedEntity) {
      throw new NotFoundException(`Entity with id {${id}} not found`);
    }
    return existedEntity;
  }

  async update(id: number, updateMemeDto: UpdateMemeDto): Promise<MemeEntity> {
    const existedEntity = await this.repository.findOne({ where: { id } });
    if (!existedEntity) {
      throw new NotFoundException(`Entity with id {${id}} not found`);
    }
    Object.assign(existedEntity, updateMemeDto);
    return this.repository.save(existedEntity);
  }

  remove(id: number): boolean {
    this.repository.softDelete({ id });
    return true;
  }
}
