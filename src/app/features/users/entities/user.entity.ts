import {ReadableDocument} from '@shared/models/database/readable-document.model';
import {LoginStatus} from '@users/models/login-status.model';

export class User extends ReadableDocument<string> {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  displayImage: string;
  role: string | null;
  permissions: string[];
  loginStatus: LoginStatus;
  passwordResetTimeout: Date | null;
}
