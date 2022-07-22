import {PartialType} from '@nestjs/mapped-types';
import {IsOptional} from 'class-validator';
import {CreateEmailTemplateDto} from './create-email-template.dto';

export class UpdateEmailTemplateDto extends PartialType(CreateEmailTemplateDto) {
  @IsOptional()
  name?: string;

  @IsOptional()
  description?: string;

  @IsOptional()
  tag?: string;

  @IsOptional()
  template?: string;

  @IsOptional()
  keys?: string[];
}
