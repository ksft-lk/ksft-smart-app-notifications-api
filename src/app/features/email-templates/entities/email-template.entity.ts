import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {DATABASE_COLLECTIONS} from '@constants/database.constants';
import {PersistableDocumentWithName} from '@shared/models/database/persistable-document.model';
import {ReadableDocument} from '@shared/models/database/readable-document.model';

@Schema({timestamps: true, collection: DATABASE_COLLECTIONS.EMAIL_TEMPLATES})
export class EmailTemplate extends PersistableDocumentWithName {
  @Prop({
    type: String,
    unique: true,
  })
  name: string;

  @Prop({
    type: String,
  })
  description: string;

  @Prop({
    type: String,
    unique: true,
  })
  tag: string;

  @Prop({
    type: String,
  })
  content: string;
}

export type EmailTemplateDocument = EmailTemplate & ReadableDocument;

export const EmailTemplateSchema = SchemaFactory.createForClass(EmailTemplate);
