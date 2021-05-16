import { Module } from '@nestjs/common';
import { SubtitlesService } from './subtitles.service';
import { TmsService } from '../tms/tms.service';
import { SubtitlesController } from './subtitles.controller';

@Module({
  controllers: [SubtitlesController],
  providers: [
   SubtitlesService,
   TmsService
  ]
})
export class SubtitlesModule {}
