import { MemeEntity } from '@core/meme/entities';
import { DeepPartial } from 'typeorm';

export class MemeResponse {
  id: number;

  name: string;

  imageUrl: string;

  constructor(entity: DeepPartial<MemeEntity>) {
    this.id = entity.id;
    this.name = entity.name;
    this.imageUrl = entity.imageUrl;
  }
}
