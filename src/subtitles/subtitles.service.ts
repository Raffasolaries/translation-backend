import { Injectable } from '@nestjs/common';
import { TmsService } from '../tms/tms.service'; 
import { CreateSubtitleDto } from './dto/create-subtitle.dto';
import { UpdateSubtitleDto } from './dto/update-subtitle.dto';

@Injectable()
export class SubtitlesService {
 constructor(private readonly tmsService: TmsService) {}

 async uploadSubtitles(file: CreateSubtitleDto) {
  // console.log('updloaded file', file['buffer'].toString());
  const parsedFile = (file['buffer'] || '').toString()
   .split('\n')
   .map(line => { 
    return {
     [line.split(/ (.+)/)[0]+' '+line.split(/ (.+)/)[1].slice(0, 27)]: line.split(/ (.+)/)[1].slice(27).trim().replace('.', '')
    }
   });
   // .map(line => /] (.+)/.exec(line)[1]).map(line => line.replace('.', ''));
  return await this.tmsService.translate(parsedFile);
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
