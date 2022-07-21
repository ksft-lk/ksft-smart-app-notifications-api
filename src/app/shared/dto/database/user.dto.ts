import {ObjectId} from 'mongoose';
import {ReadableDocument} from '@shared/models/database/readable-document.model';

export class UserDto extends ReadableDocument {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  displayImage: string;
  role: ObjectId;
  permissions: ObjectId[];
}
