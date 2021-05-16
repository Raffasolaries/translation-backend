import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubtitlesModule } from './subtitles/subtitles.module';
import { TmsService } from './tms/tms.service';

@Module({
  imports: [SubtitlesModule],
  controllers: [AppController],
  providers: [AppService, TmsService],
})
export class AppModule {}
