import { AbstractBaseEntity } from '@common/entities';
import {
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  ObjectId,
  Repository,
  SaveOptions,
} from 'typeorm';

export class BaseRepository<T extends AbstractBaseEntity> {
  constructor(private readonly baseRepository: Repository<T>) {}

  find(options?: FindManyOptions<T>) {
    return this.baseRepository.find(options);
  }

  findOne(options: FindOneOptions<T>) {
    return this.baseRepository.findOne(options);
  }

  saveMany(entities: DeepPartial<T[]>, options?: SaveOptions) {
    return this.baseRepository.save(entities, options);
  }

  save(entity: DeepPartial<T>, options?: SaveOptions) {
    return this.baseRepository.save(entity, options);
  }

  softDelete(
    criteria: string | string[] | number | number[] | Date | Date[] | ObjectId | ObjectId[] | FindOptionsWhere<T>,
  ) {
    return this.baseRepository.softDelete(criteria);
  }
}
