import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDefined, IsString, Length, isMimeType } from 'class-validator';
import { IsFile, MemoryStoredFile } from 'nestjs-form-data';
// import { Express } from 'express';

export class CreateSubtitleDto {
 @ApiProperty({ required: true })
 @IsDefined()
 @IsNotEmpty()
 @IsFile()
 file: MemoryStoredFile;

 @ApiProperty({ required: true })
 @IsDefined()
 @IsString()
 @Length(2)
 sourceLanguage: string;

 @ApiProperty({ required: true })
 @IsDefined()
 @IsString()
 @Length(2)
 targetLanguage: string;
}