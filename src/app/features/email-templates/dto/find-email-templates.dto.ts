import {IntersectionType, OmitType} from '@nestjs/mapped-types';
import {IsEnum, IsOptional} from 'class-validator';
import {PageableQuery} from '@shared/models/database/pageable-query.model';
import {DocumentStatus} from '@shared/models/database/document-metadata.model';
import {UpdateEmailTemplateDto} from '@email-templates/dto/update-email-template.dto';

export class FindEmailTemplatesDto extends IntersectionType(
  OmitType(UpdateEmailTemplateDto, ['template']),
  PageableQuery,
) {
  @IsOptional()
  @IsEnum(DocumentStatus)
  status?: DocumentStatus;
}
