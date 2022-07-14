import {Module} from '@nestjs/common';
import {NotificationsModule} from '@notifications/notifications.module';
import {EmailsModule} from '@emails/emails.module';
import {EmailTemplatesModule} from '@email-templates/email-templates.module';

@Module({
  imports: [NotificationsModule, EmailsModule, EmailTemplatesModule],
})
export class FeaturesModule {}
