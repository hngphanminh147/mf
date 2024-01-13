import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl } from 'class-validator';

export class CreateMemeDto {
  @ApiProperty({
    description: 'New Meme name',
    type: String,
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'New Meme url',
    type: String,
  })
  @IsUrl()
  imageUrl: string;
}
