import {Injectable} from '@nestjs/common';
import {CreateNotificationDto} from './dto/create-notification.dto';
import {UpdateNotificationDto} from './dto/update-notification.dto';
import {NotificationsRepository} from '@notifications/notifications.repository';
import {DatabaseService} from '@shared/services/database.service';
import {Notification, NotificationDocument} from '@notifications/entities/notification.entity';

@Injectable()
export class NotificationsService extends DatabaseService<Notification, NotificationDocument> {
  constructor(private readonly notificationsRepository: NotificationsRepository) {
    super(notificationsRepository);
  }

  create(createNotificationDto: CreateNotificationDto) {
    return 'This action adds a new notification';
  }

  findOne(id: number) {
    return `This action returns a #${id} notification`;
  }

  update(id: number, updateNotificationDto: UpdateNotificationDto) {
    return `This action updates a #${id} notification`;
  }

  remove(id: number) {
    return `This action removes a #${id} notification`;
  }
}
