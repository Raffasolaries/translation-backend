import { Test, TestingModule } from '@nestjs/testing';
import { MailerService, MailerModule, MAILER_OPTIONS } from '@nestjs-modules/mailer';
import { MailModule } from './mail.module';
import { MailService } from './mail.service';

describe('MailService', () => {
  let service: MailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [MailerModule.forRoot({
       transport: 'smtps://user@example.com:topsecret@smtp.example.com',
       defaults: {
        from: '"No Reply" <noreply@example.com>'
       }
      })],
      providers: [MailService],
    }).compile();

    service = module.get<MailService>(MailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
