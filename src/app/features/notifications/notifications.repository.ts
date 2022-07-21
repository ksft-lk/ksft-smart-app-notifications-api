import {Injectable} from '@nestjs/common';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {Notification, NotificationDocument} from './entities/notification.entity';
import {DatabaseRepository} from '@shared/repositories/database.repository';

@Injectable()
export class NotificationsRepository extends DatabaseRepository<Notification, NotificationDocument> {
  constructor(@InjectModel(Notification.name) private readonly roleDocumentModel: Model<NotificationDocument>) {
    super(roleDocumentModel);
  }
}
