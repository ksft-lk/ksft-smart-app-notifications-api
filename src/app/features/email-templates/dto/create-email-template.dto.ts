import {OmitType} from '@nestjs/mapped-types';
import {IsNotEmpty, IsString, Matches} from 'class-validator';
import {EmailTemplate} from '@email-templates/entities/email-template.entity';

export class CreateEmailTemplateDto extends OmitType(EmailTemplate, ['status', 'createdBy', 'updatedBy']) {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^[A-Z\d-_]+$/)
  tag: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}
