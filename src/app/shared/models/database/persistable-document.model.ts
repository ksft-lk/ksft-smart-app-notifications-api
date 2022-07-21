import {Prop} from '@nestjs/mongoose';
import {ObjectId, Types} from 'mongoose';
import {DATABASE_COLLECTIONS} from '@constants/database.constants';
import {DocumentStatus} from '@shared/models/database/document-metadata.model';

export class PersistableDocument {
  @Prop({enum: [...Object.values(DocumentStatus)]})
  status: DocumentStatus;

  @Prop({type: Types.ObjectId, ref: DATABASE_COLLECTIONS.USERS, required: false, default: null})
  createdBy: ObjectId | null;

  @Prop({type: Types.ObjectId, ref: DATABASE_COLLECTIONS.USERS, required: false, default: null})
  updatedBy: ObjectId | null;
}

export class PersistableDocumentWithName extends PersistableDocument {
  @Prop()
  name: string;
}
