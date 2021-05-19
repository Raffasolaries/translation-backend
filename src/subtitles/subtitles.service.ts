import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { TmsService } from '../tms/tms.service';
import { MailService } from '../mail/mail.service';
import { CreateSubtitleDto } from './dto/create-subtitle.dto';
import { UpdateSubtitleDto } from './dto/update-subtitle.dto';

@Injectable()
export class SubtitlesService {
 constructor(
  private readonly tmsService: TmsService,
  private readonly mailService: MailService
 ) {}

 async uploadSubtitles(subtitlesObj: CreateSubtitleDto) {
  // console.log('updloaded file', file['buffer'].toString());
  const parsedFile = (subtitlesObj.file['buffer'] || '').toString()
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
  console.log('parsed file', parsedFile);
  const translation = await this.tmsService.translate(parsedFile);
  console.log('translated file', translation);
  let newFile = translation.map(subtitle => subtitle.id+' '+subtitle.text.join(' ').replace(' ,', ',')).join('\n');
  return new Promise((resolve, reject) => {
   return fs.writeFile('./translation.txt', newFile, (err) => {
    if (err) return reject(err);
    return this.mailService.sendTranslationEmail('raffasolaries@gmail.com')
     .then(sendEmailRes => resolve(sendEmailRes));
   })
  });
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
