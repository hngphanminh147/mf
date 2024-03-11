import { BaseRepository } from '@common/repositories';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MemeEntity } from './entities';

@Injectable()
export class MemeRepository extends BaseRepository<MemeEntity> {
  constructor(@InjectRepository(MemeEntity) repository: Repository<MemeEntity>) {
    super(repository);
  }
}
