import {Module} from '@nestjs/common';
import {EmailsService} from '@emails/emails.service';
import {EmailsController} from '@emails/emails.controller';
import {EmailsRepository} from '@emails/emails.repository';
import {EmailTemplatesModule} from '@email-templates/email-templates.module';

@Module({
  imports: [EmailTemplatesModule],
  controllers: [EmailsController],
  providers: [EmailsService, EmailsRepository],
  exports: [EmailsService],
})
export class EmailsModule {}
