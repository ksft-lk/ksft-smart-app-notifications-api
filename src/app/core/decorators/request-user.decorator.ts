import {createParamDecorator, ExecutionContext} from '@nestjs/common';
import {Request} from '@shared/models/api/request.model';
import {UserDto} from '@shared/dto/database/user.dto';

export const RequestUser = createParamDecorator<unknown, ExecutionContext, UserDto>(
  (data: unknown, ctx: ExecutionContext) => ctx.switchToHttp().getRequest<Request>().user || null,
);
