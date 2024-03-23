import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateMemeDto, UpdateMemeDto } from './dto';
import { MemeService } from './meme.service';

@ApiTags('memes')
@Controller({
  path: 'memes',
  version: '1',
})
export class MemeController {
  constructor(private readonly memeService: MemeService) {}

  @Post()
  @ApiCreatedResponse({
    status: HttpStatus.CREATED,
    description: 'Record has been successfully created',
  })
  @ApiBadRequestResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'An error occurred with the input',
  })
  create(@Body() createMemeDto: CreateMemeDto) {
    return this.memeService.create(createMemeDto);
  }

  @Get()
  @ApiOkResponse({
    status: HttpStatus.OK,
    description: 'List of record has been successfully retrieved',
  })
  findAll() {
    return this.memeService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    status: HttpStatus.OK,
    description: 'Record has been successfully retrieved',
  })
  @ApiBadRequestResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'An error occurred with the input',
  })
  findOne(@Param('id') id: string) {
    return this.memeService.findOne(+id);
  }

  @Put(':id')
  @ApiOkResponse({
    status: HttpStatus.OK,
    description: 'Record has been successfully updated',
  })
  @ApiBadRequestResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'An error occurred with the input',
  })
  update(@Param('id') id: string, @Body() updateMemeDto: UpdateMemeDto) {
    return this.memeService.update(+id, updateMemeDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    status: HttpStatus.OK,
    description: 'Record has been successfully retrieved',
  })
  @ApiBadRequestResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Record with input id not found',
  })
  remove(@Param('id') id: string) {
    return this.memeService.remove(+id);
  }
}
