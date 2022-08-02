import {Injectable} from '@nestjs/common';
import {FilterQuery, QueryOptions, UpdateQuery} from 'mongoose';
import {DatabaseService} from '@shared/services/database.service';
import {User} from '@users/entities/user.entity';
import {DocumentStatus} from '@shared/models/database/document-metadata.model';
import {CreateEmailTemplateDto} from '@email-templates/dto/create-email-template.dto';
import {UpdateEmailTemplateDto} from '@email-templates/dto/update-email-template.dto';
import {EmailTemplatesRepository} from '@email-templates/email-templates.repository';
import {EmailTemplate, EmailTemplateDocument} from '@email-templates/entities/email-template.entity';
import {FindEmailTemplatesDto} from '@email-templates/dto/find-email-templates.dto';

@Injectable()
export class EmailTemplatesService extends DatabaseService<EmailTemplate, EmailTemplateDocument> {
  constructor(private readonly emailTemplatesRepository: EmailTemplatesRepository) {
    super(emailTemplatesRepository);
  }

  async create(user: User, dto: CreateEmailTemplateDto): Promise<EmailTemplateDocument> {
    const emailTemplate: EmailTemplate = {
      name: dto.name,
      description: dto.description,
      tag: dto.tag,
      content: dto.content,
      status: DocumentStatus.ACTIVE,
      createdBy: null,
      updatedBy: null,
    };

    return await this.emailTemplatesRepository.create(emailTemplate);
  }

  async find(dto: FindEmailTemplatesDto): Promise<EmailTemplateDocument[]> {
    const query: FilterQuery<EmailTemplateDocument> = {};
    const options: QueryOptions<EmailTemplateDocument> = {};

    if (dto.name) {
      query.name = new RegExp(dto.name, 'i');
    }

    if (dto.status) {
      query.status = dto.status;
    }

    if (dto.description) {
      query.description = new RegExp(dto.description, 'i');
    }

    if (dto.tag) {
      query.tag = dto.tag;
    }

    if (dto.keys) {
      query.keys = {
        $in: dto.keys,
      };
    }

    if (dto.size) {
      options.limit = dto.size;

      if (dto.page) {
        options.skip = dto.page * dto.size;
      }
    }

    return await this.emailTemplatesRepository.find(query, null, options);
  }

  async update(user: User, id: string, dto: UpdateEmailTemplateDto): Promise<EmailTemplateDocument | null> {
    const updateQuery: UpdateQuery<EmailTemplate> = {
      $set: {
        ...dto,
        updatedBy: null,
      },
    };

    return await this.emailTemplatesRepository.updateOneById(id, updateQuery, {
      new: true,
      runValidators: true,
    });
  }
}
