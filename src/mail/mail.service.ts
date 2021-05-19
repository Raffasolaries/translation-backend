import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
 constructor(private mailerService: MailerService) {}
 
 async sendTranslationEmail(toEmail) {
  return await this.mailerService.sendMail({
    to: toEmail,
    // from: '"Support Team" <support@example.com>', // override default from
    subject: 'Translation Completed!',
    template: './translation', // `.hbs` extension is appended automatically
    attachments: [{
     filename: 'translation.txt',
     path: './'
    }],
    context: { // ✏️ filling curly brackets with content
      name: toEmail
    },
  })
  .then(result => result)
  .catch(error => error);
 }
}
