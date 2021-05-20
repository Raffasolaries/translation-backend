import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { SubtitlesModule } from './../src/subtitles/subtitles.module';
import { SubtitlesService } from './../src/subtitles/subtitles.service';
import { CreateSubtitleDto } from './../src/subtitles/dto/create-subtitle.dto';


describe('SubtitlesController (e2e)', () => {
  let app: INestApplication;
  let subtitlesService = {
   uploadSubtitles: async (subtitlesObj: CreateSubtitleDto) => {
    return {
     status: 'OK',
     error: null,
     stack: {}
    }
   }
  }

  beforeEach(async () => {
   const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule, SubtitlesModule],
   })
   .overrideProvider(SubtitlesService)
   .useValue(subtitlesService)
   .compile();

   app = moduleFixture.createNestApplication();
   await app.init();
  });

  it('/subtitles (POST)', async (done) => {
   await request(app.getHttpServer())
    .post('/subtitles')
    .attach('file', './src/subtitles/files/test-file.txt')
    .field('sourceLanguage', 'en')
    .field('targetLanguage', 'de')
    .expect(201)
   return done();
  });

  afterAll(async () => {
   await app.close();
  });
});