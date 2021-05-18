import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDefined, IsString, Length, isMimeType, IsArray } from 'class-validator';

export class TranslateTmsDto {
 @ApiProperty({ required: true })
 @IsDefined()
 @IsString()
 id: string;

 @ApiProperty({ required: true })
 @IsDefined()
 @IsArray()
 text: string[];

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