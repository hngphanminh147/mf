// export class CreateMemeDto {}

import { DeepPartial } from 'typeorm';
import { MemeEntity } from '../entities';

export type CreateMemeDto = DeepPartial<MemeEntity>;
