import { Controller, Get, Post, Body, Param, Delete, Put, UseInterceptors } from '@nestjs/common';
import { MemeService } from './meme.service';
import { CreateMemeDto } from './dto/create-meme.dto';
import { UpdateMemeDto } from './dto/update-meme.dto';
import { LoggingInterceptor } from '@common/interceptors/logging.interceptor';

@Controller({
  path: 'meme',
  version: '1',
})
@UseInterceptors(LoggingInterceptor)
export class MemeController {
  constructor(private readonly memeService: MemeService) {}

  @Post()
  create(@Body() createMemeDto: CreateMemeDto) {
    return this.memeService.create(createMemeDto);
  }

  @Get()
  findAll() {
    return this.memeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.memeService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMemeDto: UpdateMemeDto) {
    return this.memeService.update(+id, updateMemeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.memeService.remove(+id);
  }
}
