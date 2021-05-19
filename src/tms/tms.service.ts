import { Injectable } from '@nestjs/common';
import * as levenshtein from 'fast-levenshtein';
import * as fs from 'fs';
import { TranslateTmsDto } from './dto/translate-tms.dto';
import { UpdateTmsDto } from './dto/update-tms.dto';
import * as historicalData from '../../historical-data.json';

@Injectable()
export class TmsService {
 async update(translations: UpdateTmsDto[]) {
  return new Promise((resolve, reject) => {
   let newContent = [...historicalData, ...translations];
   return fs.writeFile('./historical-data.json', JSON.stringify(newContent), (err) => {
    if (err) return reject(err);
    return resolve(newContent);
   });
  });
 }

 searchAndReplace(sentence, sourceLanguage, targetLanguage) {
  for (let data of historicalData) {
   if (data.sourceLanguage === sourceLanguage 
    && data.targetLanguage === targetLanguage 
    && levenshtein.get(sentence, data.source) < 5) {
    return data.target; 
   }
  }
  return sentence;
 }

 async translate(parsedFile: TranslateTmsDto[]) {
  // search strings
  for (let parsed of parsedFile) {
   parsed.text.map(text => this.searchAndReplace(text, parsed.sourceLanguage, parsed.targetLanguage));
  }
  return parsedFile;
 }
}