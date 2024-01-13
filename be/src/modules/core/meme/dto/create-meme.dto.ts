import { IsString, IsUrl } from 'class-validator';

export class CreateMemeDto {
  @IsString()
  name: string;

  @IsUrl()
  imageUrl: string;
}
