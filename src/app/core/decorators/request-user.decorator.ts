import {createParamDecorator, ExecutionContext} from '@nestjs/common';
import {Request} from '@shared/models/api/request.model';
import {User} from '@users/entities/user.entity';

export const RequestUser = createParamDecorator<unknown, ExecutionContext, User>(
  (data: unknown, ctx: ExecutionContext) => ctx.switchToHttp().getRequest<Request>().user || null,
);
