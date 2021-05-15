import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { configService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (!configService.isProduction()) {

    const document = SwaggerModule.createDocument(app, new DocumentBuilder()
      .setTitle('Translate API')
      .setDescription('Translating Subtitles API')
      .build());

    SwaggerModule.setup('docs', app, document);

  }

  await app.listen(3000);
}
bootstrap();
