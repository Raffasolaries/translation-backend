import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { TmsModule } from './../src/tms/tms.module';
import { TmsService } from './../src/tms/tms.service';
import { UpdateTmsDto } from './../src/tms/dto/update-tms.dto';
import { TranslateTmsDto } from './../src/tms/dto/translate-tms.dto';

describe('TmsController (e2e)', () => {
  let app: INestApplication;
  let updateHistoryPayload: UpdateTmsDto[] = [{"source":"Hello World","target":"Hallo Welt","sourceLanguage":"en","targetLanguage":"de"},{"source":"Hello guys","target":"Hallo Leute","sourceLanguage":"en","targetLanguage":"de"},{"source":"I walk to the supermarket","target":"Ich gehe zum Supermarkt.","sourceLanguage":"en","targetLanguage":"de"},{"source":"Come back to the light","target":"Komm zurück zum Licht","sourceLanguage":"en","targetLanguage":"de"}];
  let parsedFile: TranslateTmsDto[] = [
   {
     id: '1 [00:00:12.00 - 00:01:20.00]',
     sourceLanguage: 'en',
     targetLanguage: 'de',
     text: [ 'I am Arwen', '-', "I've come to help you" ]
   },
   {
     id: '2 [00:03:55.00 - 00:04:20.00]',
     sourceLanguage: 'en',
     targetLanguage: 'de',
     text: [ 'Come back to the light' ]
   },
   {
     id: '3 [00:04:59.00 - 00:05:30.00]',
     sourceLanguage: 'en',
     targetLanguage: 'de',
     text: [ 'Nooo', ',', 'my precious!!' ]
   }
  ];
  let tmsService = {
   update: async (translations: UpdateTmsDto[]) => {
    return [{"source":"Hello World","target":"Hallo Welt","sourceLanguage":"en","targetLanguage":"de"},{"source":"Hello guys","target":"Hallo Leute","sourceLanguage":"en","targetLanguage":"de"},{"source":"I walk to the supermarket","target":"Ich gehe zum Supermarkt.","sourceLanguage":"en","targetLanguage":"de"},{"source":"Come back to the light","target":"Komm zurück zum Licht","sourceLanguage":"en","targetLanguage":"de"}];
   },

   translate: async (source: TranslateTmsDto[]) => {
    return [
      {
        id: '1 [00:00:12.00 - 00:01:20.00]',
        sourceLanguage: 'en',
        targetLanguage: 'de',
        text: [ 'I am Arwen', '-', "I've come to help you" ]
      },
      {
        id: '2 [00:03:55.00 - 00:04:20.00]',
        sourceLanguage: 'en',
        targetLanguage: 'de',
        text: [ 'Komm zurück zum Licht' ]
      },
      {
        id: '3 [00:04:59.00 - 00:05:30.00]',
        sourceLanguage: 'en',
        targetLanguage: 'de',
        text: [ 'Nooo', ',', 'my precious!!' ]
      }
    ]
   }  
  }

  beforeEach(async () => {
   const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule, TmsModule],
   })
   .overrideProvider(TmsService)
   .useValue(tmsService)
   .compile();

   app = moduleFixture.createNestApplication();
   await app.init();
  });

  it('/tms (PATCH)', async (done) => {
   await request(app.getHttpServer())
    .patch('/tms')
    .send(updateHistoryPayload)
    .expect(200)
    .expect('Content-Type', /json/)
    .expect(await tmsService.update(updateHistoryPayload));
   return done();
  });

  it('/tms (POST)', async (done) => {
   await request(app.getHttpServer())
    .post('/tms')
    .send(parsedFile)
    .expect(201)
    .expect('Content-Type', /json/)
    .expect(await tmsService.translate(parsedFile));
   return done();
  });

  afterAll(async () => {
   await app.close();
  });
});