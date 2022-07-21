import {Request as ExpressRequest} from 'express';
import {UserDto} from '@shared/dto/database/user.dto';

export type Request = ExpressRequest & {
  start: number;
  user: UserDto;
};
