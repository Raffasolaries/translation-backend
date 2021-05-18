import { Injectable } from '@nestjs/common';
import * as levenshtein from 'fast-levenshtein';

@Injectable()
export class TmsService {
 

 async translate(parsedFile: object[]) {
  console.log('distance', levenshtein.get('back', 'book'));
  return parsedFile;
 }
}
