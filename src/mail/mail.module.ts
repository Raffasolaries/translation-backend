import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailService } from './mail.service';
import { join } from 'path';

@Module({
  imports: [
    MailerModule.forRootAsync({
     useFactory: async (config: ConfigService) => ({
      // transport: 'smtps://user@example.com:topsecret@smtp.example.com',
      // or
      transport: {
        // host: config.get('MAIL_HOST'),
        // port: config.get('MAIL_PORT'),
        service: 'gmail',
        secure: true,
        auth: {
          user: config.get('MAIL_USER'),
          pass: config.get('MAIL_PASSWORD')
        },
      },
      defaults: {
        from: `"No Reply" <${config.get('MAIL_FROM')}>`,
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
        options: {
          strict: true,
        },
      },
    }),
    inject: [ConfigService]
   })
  ],
  providers: [MailService],
  exports: [MailService], // 👈 export for DI
})
export class MailModule {}
