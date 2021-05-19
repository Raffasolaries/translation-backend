import { Test, TestingModule } from '@nestjs/testing';
import { MailerService, MailerModule, MAILER_OPTIONS } from '@nestjs-modules/mailer';
import { NestjsFormDataModule, MemoryStoredFile } from 'nestjs-form-data';
import { SubtitlesController } from './subtitles.controller';
import { SubtitlesService } from './subtitles.service';
import { TmsService } from '../tms/tms.service';
import { MailService } from '../mail/mail.service';

describe('SubtitlesController', () => {
  let controller: SubtitlesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
     imports: [
      MailerModule.forRoot({
       transport: 'smtps://user@example.com:topsecret@smtp.example.com',
       defaults: {
        from: '"No Reply" <noreply@example.com>'
       }
      }),
      NestjsFormDataModule.config({ storage: MemoryStoredFile })
     ],
     controllers: [SubtitlesController],
     providers: [SubtitlesService, TmsService, MailService],
    }).compile();

    controller = module.get<SubtitlesController>(SubtitlesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
