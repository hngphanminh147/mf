// import { DeepPartial } from 'typeorm';
// import { CreateMemeDto } from './create-meme.dto';

import { IsOptional, IsString, IsUrl } from 'class-validator';

// export type UpdateMemeDto = DeepPartial<CreateMemeDto>;

export class UpdateMemeDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsUrl()
  imageUrl: string;
}
