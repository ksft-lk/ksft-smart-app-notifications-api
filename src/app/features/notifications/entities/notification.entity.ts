import {PersistableDocument} from '@shared/models/database/persistable-document';
import {Document, ObjectId} from 'mongoose';
import {DocumentTimestampConfig} from '@shared/models/database/document-metadata';
import {Schema, SchemaFactory} from '@nestjs/mongoose';
import {DATABASE_COLLECTIONS} from '@constants/database';

@Schema({timestamps: true, collection: DATABASE_COLLECTIONS.NOTIFICATIONS})
export class Notification extends PersistableDocument {}

export type NotificationDocument = Notification & Document<ObjectId> & DocumentTimestampConfig;

export const NotificationSchema = SchemaFactory.createForClass(Notification);
