import { DeepPartial } from 'typeorm';
import { CreateMemeDto } from './create-meme.dto';

export type UpdateMemeDto = DeepPartial<CreateMemeDto>;
