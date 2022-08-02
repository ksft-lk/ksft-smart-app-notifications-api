import {Request as ExpressRequest} from 'express';
import {User} from '@users/entities/user.entity';

export type Request = ExpressRequest & {
  start: number;
  user: User;
};
