import {IntersectionType, PickType} from '@nestjs/mapped-types';
import {Document, ObjectId} from 'mongoose';
import {DocumentStatus, DocumentTimestampConfig} from '@shared/models/database/document-metadata.model';

export class ReadableDocument extends IntersectionType(PickType(Document, ['_id', '__v']), DocumentTimestampConfig) {
  _id: ObjectId;
  status: DocumentStatus;
  createdBy: ObjectId | null;
  updatedBy: ObjectId | null;
}
