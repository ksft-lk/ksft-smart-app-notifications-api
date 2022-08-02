import {IntersectionType, PickType} from '@nestjs/mapped-types';
import {Document, ObjectId} from 'mongoose';
import {DocumentStatus, DocumentTimestampConfig} from '@shared/models/database/document-metadata.model';

export class ReadableDocument<T extends ObjectId | string = ObjectId> extends IntersectionType(
  PickType(Document, ['_id', '__v']),
  DocumentTimestampConfig,
) {
  _id: T;
  status: DocumentStatus;
  createdBy: T | null;
  updatedBy: T | null;
}
