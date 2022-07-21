import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {NotificationsService} from '@notifications/notifications.service';
import {NotificationsController} from '@notifications/notifications.controller';
import {Notification, NotificationSchema} from '@notifications/entities/notification.entity';
import {NotificationsRepository} from '@notifications/notifications.repository';

@Module({
  imports: [MongooseModule.forFeature([{name: Notification.name, schema: NotificationSchema}])],
  controllers: [NotificationsController],
  providers: [NotificationsService, NotificationsRepository],
  exports: [MongooseModule, NotificationsService],
})
export class NotificationsModule {}
