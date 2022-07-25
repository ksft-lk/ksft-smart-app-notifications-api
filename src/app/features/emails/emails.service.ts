import {Injectable, NotFoundException} from '@nestjs/common';
import * as handlebars from 'handlebars';
import {EmailsRepository} from '@emails/emails.repository';
import {SendEmailDto} from '@emails/dto/send-email.dto';
import {EmailTemplatesService} from '@email-templates/email-templates.service';

@Injectable()
export class EmailsService {
  constructor(
    private readonly emailsRepository: EmailsRepository,
    private readonly emailTemplatesService: EmailTemplatesService,
  ) {}

  async send(dtoList: SendEmailDto[]): Promise<void> {
    const dataList = await Promise.all(
      dtoList.map(async dto => {
        const template = await this.emailTemplatesService.findOneByQuery({
          tag: dto.tag,
        });

        if (!template) {
          throw new NotFoundException(`An email template doesn't exist under the tag ${dto.tag}`);
        }

        return {
          template: template,
          dto: dto,
        };
      }),
    );

    for (const data of dataList) {
      const {template, dto} = data;

      const subject = `=?utf-8?B?${Buffer.from(template.name).toString('base64')}?=`;

      const content = handlebars.compile(template.content);

      const contentHtml = content(dto.context);

      await this.emailsRepository.send(subject, contentHtml, dto.recipients);
    }
  }
}
