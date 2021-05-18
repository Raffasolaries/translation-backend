import { Module } from '@nestjs/common';
import { NestjsFormDataModule, MemoryStoredFile } from 'nestjs-form-data';
import { SubtitlesService } from './subtitles.service';
import { TmsService } from '../tms/tms.service';
import { SubtitlesController } from './subtitles.controller';

@Module({
  imports: [
   NestjsFormDataModule.config({ storage: MemoryStoredFile })
  ],
  controllers: [SubtitlesController],
  providers: [
   SubtitlesService,
   TmsService
  ]
})
export class SubtitlesModule {}
