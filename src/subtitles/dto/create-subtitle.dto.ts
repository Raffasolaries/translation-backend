import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDefined } from 'class-validator';
import { Express } from 'express';

export class CreateSubtitleDto {
 @IsDefined()
 @IsNotEmpty()
 file: Express.Multer.File
}
