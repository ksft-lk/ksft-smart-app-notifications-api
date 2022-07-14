import {createParamDecorator, ExecutionContext} from '@nestjs/common';
import {Request} from '@shared/models/api/request';
import {User} from '@shared/documents/user';

export const RequestUser = createParamDecorator<unknown, ExecutionContext, User>(
  (data: unknown, ctx: ExecutionContext) => ctx.switchToHttp().getRequest<Request>().user || null,
);
