import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDefined, IsString, Length, isMimeType } from 'class-validator';
import { IsFile, MemoryStoredFile } from 'nestjs-form-data';
import { Express } from 'express';

export class CreateSubtitleDto {
 @IsDefined()
 @IsNotEmpty()
 @IsFile()
 file: MemoryStoredFile;

 @IsDefined()
 @IsString()
 @Length(2)
 sourceLanguage: string;

 @IsDefined()
 @IsString()
 @Length(2)
 targetLanguage: string;
}
