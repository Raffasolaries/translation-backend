import { Injectable } from '@nestjs/common';
import { Express } from 'express';
import { TmsService } from '../tms/tms.service';
import { CreateSubtitleDto } from './dto/create-subtitle.dto';
import { UpdateSubtitleDto } from './dto/update-subtitle.dto';

@Injectable()
export class SubtitlesService {
 constructor(private readonly tmsService: TmsService) {}

 async uploadSubtitles(subtitlesObj: CreateSubtitleDto) {
  // console.log('updloaded file', file['buffer'].toString());
  let parsedFile = (subtitlesObj.file['buffer'] || '').toString()
   .split('\n')
   .map(line => { 
    return {
     id: line.split(/ (.+)/)[0]+' '+line.split(/ (.+)/)[1].slice(0, 27),
     sourceLanguage: subtitlesObj.sourceLanguage,
     targetLanguage: subtitlesObj.targetLanguage,
     text: line.split(/ (.+)/)[1].slice(27).trim()
      // transformations
      .replace('.', '')
      .replace('-', 'ƒ-ƒ')
      .replace(',', 'ƒ,ƒ')
      .split('ƒ')
      .map(elem => elem.trim())
    }
   });
  parsedFile = await this.tmsService.translate(parsedFile);
  return parsedFile;
 }

 // findAll() {
 //   return `This action returns all subtitles`;
 // }

 // findOne(id: number) {
 //   return `This action returns a #${id} subtitle`;
 // }

 // update(id: number, updateSubtitleDto: UpdateSubtitleDto) {
 //   return `This action updates a #${id} subtitle`;
 // }

 // remove(id: number) {
 //   return `This action removes a #${id} subtitle`;
 // }
}
