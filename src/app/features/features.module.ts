import {Module} from '@nestjs/common';
import {NotificationsModule} from '@notifications/notifications.module';
import {EmailsModule} from '@emails/emails.module';
import {EmailTemplatesModule} from '@email-templates/email-templates.module';
import {UsersModule} from '@users/users.module';

@Module({
  imports: [NotificationsModule, EmailsModule, EmailTemplatesModule, UsersModule],
  exports: [UsersModule],
})
export class FeaturesModule {}
