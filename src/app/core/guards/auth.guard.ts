import {CanActivate, ExecutionContext, Injectable, Logger} from '@nestjs/common';
import {Reflector} from '@nestjs/core';
import {Types} from 'mongoose';
import {Request} from '@shared/models/api/request.model';
import {UsersService} from '@users/users.service';

/**
 * Used globally to authenticate and authorize all endpoints that aren't marked with @Public
 */
@Injectable()
export class AuthGuard implements CanActivate {
  private readonly logger = new Logger(AuthGuard.name);

  constructor(private readonly usersService: UsersService, private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    //exclude all @Public decorated endpoints
    if (this.reflector.get<boolean>('isPublic', context.getHandler())) {
      return true;
    }

    const request = context.switchToHttp().getRequest<Request>();

    const header = request.headers.authorization;

    this.logger.log(`Authenticating: ${request.path}`);

    if (!header) {
      return false;
    }

    const credential = header.replace('Bearer', '').trim();

    if (Types.ObjectId.isValid(credential) && new Types.ObjectId(credential).toString() === credential) {
      const user = await this.usersService.findOneById(credential, credential);

      if (!user) {
        return false;
      }

      request.user = user;
    } else {
      request.user = await this.usersService.authorize({
        token: credential,
        path: request.route.path,
        method: request.method,
      });
    }

    return true;
  }
}
