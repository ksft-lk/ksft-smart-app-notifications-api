import {Schema, SchemaFactory} from '@nestjs/mongoose';
import {DATABASE_COLLECTIONS} from '@constants/database';
import {PersistableDocument} from '@shared/models/database/persistable-document';
import {Document, ObjectId} from 'mongoose';
import {DocumentTimestampConfig} from '@shared/models/database/document-metadata';

@Schema({timestamps: true, collection: DATABASE_COLLECTIONS.EMAIL_TEMPLATES})
export class EmailTemplate extends PersistableDocument {}

export type EmailTemplateDocument = EmailTemplate & Document<ObjectId> & DocumentTimestampConfig;

export const EmailTemplateSchema = SchemaFactory.createForClass(EmailTemplate);
