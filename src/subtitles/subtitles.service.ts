import { Injectable } from '@nestjs/common';
import { Express } from 'express';
import { CreateSubtitleDto } from './dto/create-subtitle.dto';
import { UpdateSubtitleDto } from './dto/update-subtitle.dto';

@Injectable()
export class SubtitlesService {
  async uploadSubtitles(file: CreateSubtitleDto) {
   console.log('updloaded file', file['buffer'].toString());
   const parsedFile = (file['buffer'] || '').toString().split('\n').map(line => /] (.+)/.exec(line)[1]).map(line => line.replace('.', ''));
   console.log('parsedFile', parsedFile);
   return parsedFile;
  }

  findAll() {
    return `This action returns all subtitles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subtitle`;
  }

  update(id: number, updateSubtitleDto: UpdateSubtitleDto) {
    return `This action updates a #${id} subtitle`;
  }

  remove(id: number) {
    return `This action removes a #${id} subtitle`;
  }
}
