import {CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor} from '@nestjs/common';
import {map, Observable, tap} from 'rxjs';
import {ApiResponse, ApiResponseStatus} from '@shared/models/api/api-response';
import {Request} from '@shared/models/api/request';

@Injectable()
export class ApiResponseInterceptor<T> implements NestInterceptor<T, ApiResponse<T>> {
  private readonly logger = new Logger(ApiResponseInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<ApiResponse<T>> {
    context.switchToHttp().getRequest<Request>().start = Date.now();

    return next.handle().pipe(
      map(value => ({
        status: ApiResponseStatus.SUCCESS,
        message: null,
        data: typeof value !== 'undefined' && typeof value !== 'function' ? value : null,
      })),
      tap(() => {
        const request = context.switchToHttp().getRequest<Request>();

        const method = request.method.toUpperCase();
        const path = request.path.toLowerCase();
        const status = context.switchToHttp().getResponse().statusCode;
        const time = request.start ? Date.now() - request.start : 0;

        this.logger.log(`${method} ${path} => ${status}. Took ${time} ms`);
      }),
    );
  }
}
