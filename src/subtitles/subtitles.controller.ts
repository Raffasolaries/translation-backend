import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FormDataRequest } from 'nestjs-form-data';
import { Express } from 'express';
import { SubtitlesService } from './subtitles.service';
import { CreateSubtitleDto } from './dto/create-subtitle.dto';
import { UpdateSubtitleDto } from './dto/update-subtitle.dto';

@Controller('subtitles')
export class SubtitlesController {
  constructor(private readonly subtitlesService: SubtitlesService) {}

  @Post()
  // @UseInterceptors(FileInterceptor('file'))
  @FormDataRequest()
  async uploadSubtitles(@Body() subtitlesObj: CreateSubtitleDto
   //
  ) {
   return await this.subtitlesService.uploadSubtitles(subtitlesObj);
  }

  @Get()
  findAll() {
    return this.subtitlesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subtitlesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubtitleDto: UpdateSubtitleDto) {
    return this.subtitlesService.update(+id, updateSubtitleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subtitlesService.remove(+id);
  }
}
