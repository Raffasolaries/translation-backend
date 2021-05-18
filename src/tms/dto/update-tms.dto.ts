import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDefined, IsString, Length, isMimeType } from 'class-validator';

export class UpdateTmsDto {
 @ApiProperty({ required: true })
 @IsDefined()
 @IsString()
 source: string;

 @ApiProperty({ required: true })
 @IsDefined()
 @IsString()
 target: string;

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