import {Injectable} from '@nestjs/common';
import {CreateEmailTemplateDto} from './dto/create-email-template.dto';
import {UpdateEmailTemplateDto} from './dto/update-email-template.dto';
import {EmailTemplatesRepository} from '@email-templates/email-templates.repository';
import {DatabaseService} from '@shared/services/database.service';
import {EmailTemplate, EmailTemplateDocument} from '@email-templates/entities/email-template.entity';

@Injectable()
export class EmailTemplatesService extends DatabaseService<EmailTemplate, EmailTemplateDocument> {
  constructor(private readonly emailTemplatesRepository: EmailTemplatesRepository) {
    super(emailTemplatesRepository);
  }

  create(createEmailTemplateDto: CreateEmailTemplateDto) {
    return 'This action adds a new emailTemplate';
  }

  update(id: string, updateEmailTemplateDto: UpdateEmailTemplateDto) {
    return `This action updates a #${id} emailTemplate`;
  }
}
