import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {DatabaseRepository} from '@shared/repositories/database.repository';
import {EmailTemplate, EmailTemplateDocument} from '@email-templates/entities/email-template.entity';

@Injectable()
export class EmailTemplatesRepository extends DatabaseRepository<EmailTemplate, EmailTemplateDocument> {
  constructor(@InjectModel(EmailTemplate.name) private readonly roleDocumentModel: Model<EmailTemplateDocument>) {
    super(roleDocumentModel);
  }
}
