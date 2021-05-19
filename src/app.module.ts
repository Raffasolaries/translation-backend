import { Module } from '@nestjs/common';
import { NestjsFormDataModule, MemoryStoredFile } from 'nestjs-form-data';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubtitlesModule } from './subtitles/subtitles.module';
import { TmsService } from './tms/tms.service';
import { fromEventPattern } from 'rxjs';
import { TmsModule } from './tms/tms.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
   SubtitlesModule,
   // NestjsFormDataModule
   NestjsFormDataModule.config({ storage: MemoryStoredFile }),
   TmsModule,
   MailModule
  ],
  controllers: [AppController],
  providers: [AppService, TmsService],
})
export class AppModule {}
