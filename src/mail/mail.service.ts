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
     path: './translation.txt'
    }],
    context: { // ✏️ filling curly brackets with content
      name: toEmail
    },
  })
  .then(result => { 
   return {
    status: 'OK',
    error: null,
    stack: result
   }
  })
  .catch(error => {
   return {
    status: 'KO',
    error: error,
    stack: error
   }
  });
 }
}
