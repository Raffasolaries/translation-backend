import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubtitlesModule } from './subtitles/subtitles.module';

@Module({
  imports: [SubtitlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
