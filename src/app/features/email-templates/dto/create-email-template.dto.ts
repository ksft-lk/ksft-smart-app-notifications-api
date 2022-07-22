import {OmitType} from '@nestjs/mapped-types';
import {IsArray, IsNotEmpty, IsString} from 'class-validator';
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
  tag: string;

  @IsString()
  @IsNotEmpty()
  template: string;

  @IsArray()
  @IsString({each: true})
  keys: string[];
}
