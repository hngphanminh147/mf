import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUrl } from 'class-validator';

export class UpdateMemeDto {
  @ApiProperty({
    description: 'Meme name',
    type: String,
  })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Meme url',
    type: String,
  })
  @IsOptional()
  @IsUrl()
  imageUrl: string;
}
