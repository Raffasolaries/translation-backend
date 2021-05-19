import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NestjsFormDataModule, MemoryStoredFile } from 'nestjs-form-data';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubtitlesModule } from './subtitles/subtitles.module';
import { TmsService } from './tms/tms.service';
import { TmsModule } from './tms/tms.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
   SubtitlesModule,
   NestjsFormDataModule.config({ storage: MemoryStoredFile }),
   ConfigModule.forRoot({
    isGlobal: true, // no need to import into other modules
    expandVariables: true
   }),
   TmsModule,
   MailModule
  ],
  controllers: [AppController],
  providers: [AppService, TmsService],
})
export class AppModule {}
