import { Body, Controller, Patch, Post, ParseArrayPipe } from '@nestjs/common';
import { TmsService } from './tms.service';
import { TranslateTmsDto } from './dto/translate-tms.dto';
import { UpdateTmsDto } from './dto/update-tms.dto';

 
@Controller('tms')
export class TmsController {
 constructor(private readonly tmsService: TmsService) {}

 @Patch()
 async update(@Body(new ParseArrayPipe({ items: UpdateTmsDto })) translations: UpdateTmsDto[]) {
  return await this.tmsService.update(translations);
 }

 @Post()
 async translate(@Body(new ParseArrayPipe({ items: TranslateTmsDto })) parsedFile: TranslateTmsDto[]) {
  return await this.tmsService.translate(parsedFile);
 }
}
