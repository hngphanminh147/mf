import { ErrorsInterceptor } from '@common/interceptors/errors.interceptor';
import { LoggingInterceptor } from '@common/interceptors/logging.interceptor';
import { Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { CreateMemeDto } from './dto/create-meme.dto';
import { UpdateMemeDto } from './dto/update-meme.dto';
import { MemeService } from './meme.service';

@Controller({
  path: 'meme',
  version: '1',
})
@UseInterceptors(LoggingInterceptor)
@UseInterceptors(ErrorsInterceptor)
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
