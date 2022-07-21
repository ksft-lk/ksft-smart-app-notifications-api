import {PersistableDocument} from '@shared/models/database/persistable-document.model';
import {Schema, SchemaFactory} from '@nestjs/mongoose';
import {DATABASE_COLLECTIONS} from '@constants/database.constants';
import {ReadableDocument} from '@shared/models/database/readable-document.model';

@Schema({timestamps: true, collection: DATABASE_COLLECTIONS.NOTIFICATIONS})
export class Notification extends PersistableDocument {}

export type NotificationDocument = Notification & ReadableDocument;

export const NotificationSchema = SchemaFactory.createForClass(Notification);
