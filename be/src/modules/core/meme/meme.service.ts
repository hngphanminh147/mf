import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMemeDto, UpdateMemeDto } from './dto';
import { MemeResponse } from './dto/response';
import { MemeRepository } from './meme.repository';

@Injectable()
export class MemeService {
  constructor(private readonly repository: MemeRepository) {}

  async create(createMemeDto: CreateMemeDto): Promise<MemeResponse> {
    const existedEntity = await this.repository.save(createMemeDto);
    return new MemeResponse(existedEntity);
  }

  async findAll(): Promise<MemeResponse[]> {
    return (await this.repository.find()).map((entity) => new MemeResponse(entity));
  }

  async findOne(id: number): Promise<MemeResponse> {
    const existedEntity = await this.repository.findOne({ where: { id } });
    if (!existedEntity) {
      throw new NotFoundException(`Entity with id {${id}} not found`);
    }
    return new MemeResponse(existedEntity);
  }

  async update(id: number, updateMemeDto: UpdateMemeDto): Promise<MemeResponse> {
    const existedEntity = await this.repository.findOne({ where: { id } });
    if (!existedEntity) {
      throw new NotFoundException(`Entity with id {${id}} not found`);
    }
    Object.assign(existedEntity, updateMemeDto);
    const updatedEntity = await this.repository.save(existedEntity);
    return new MemeResponse(updatedEntity);
  }

  async remove(id: number): Promise<boolean> {
    const existedEntity = await this.repository.findOne({ where: { id } });
    if (!existedEntity) {
      throw new NotFoundException(`Entity with id {${id}} not found`);
    }
    this.repository.softDelete({ id });
    return true;
  }
}
