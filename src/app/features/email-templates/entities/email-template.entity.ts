import {Schema, SchemaFactory} from '@nestjs/mongoose';
import {DATABASE_COLLECTIONS} from '@constants/database.constants';
import {PersistableDocument} from '@shared/models/database/persistable-document.model';
import {ReadableDocument} from '@shared/models/database/readable-document.model';

@Schema({timestamps: true, collection: DATABASE_COLLECTIONS.EMAIL_TEMPLATES})
export class EmailTemplate extends PersistableDocument {}

export type EmailTemplateDocument = EmailTemplate & ReadableDocument;

export const EmailTemplateSchema = SchemaFactory.createForClass(EmailTemplate);
