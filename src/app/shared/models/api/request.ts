import {Request as ExpressRequest} from 'express';
import {User} from '@shared/documents/user';

export type Request = ExpressRequest & {
  start: number;
  user: User;
};
