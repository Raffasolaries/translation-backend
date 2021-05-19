import { Test, TestingModule } from '@nestjs/testing';
import { MailerService, MailerModule, MAILER_OPTIONS } from '@nestjs-modules/mailer';
import { SubtitlesService } from './subtitles.service';
import { TmsService } from '../tms/tms.service';
import { MailService } from '../mail/mail.service';

describe('SubtitlesService', () => {
  let service: SubtitlesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
     imports: [MailerModule.forRoot({
      transport: 'smtps://user@example.com:topsecret@smtp.example.com',
      defaults: {
       from: '"No Reply" <noreply@example.com>'
      }
     })],
     providers: [SubtitlesService, TmsService, MailService],
    }).compile();

    service = module.get<SubtitlesService>(SubtitlesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
