import { Injectable } from '@nestjs/common';
import * as levenshtein from 'fast-levenshtein';
import * as fs from 'fs';
import { TranslateTmsDto } from './dto/translate-tms.dto';
import { UpdateTmsDto } from './dto/update-tms.dto';
import * as historicalData from './files/historical-data.json';

@Injectable()
export class TmsService {
 async update(translations: UpdateTmsDto[]) {
  return new Promise((resolve, reject) => {
   console.log('historicalData', historicalData)
   let newContent = [...historicalData, ...translations];
   return fs.writeFile('./src/tms/files/historical-data.json', JSON.stringify(newContent), (err) => {
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

 async translate(source: TranslateTmsDto[]) {
  // search strings
  let result = source;
  for (let parsed of result) {
   parsed.text = parsed.text.map(sentence => this.searchAndReplace(sentence, parsed.sourceLanguage, parsed.targetLanguage));
  }
  return result;
 }
}