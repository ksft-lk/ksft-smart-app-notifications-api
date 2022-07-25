import {ArgumentsHost, Catch, ExceptionFilter, HttpException, Logger} from '@nestjs/common';
import {HttpAdapterHost} from '@nestjs/core';
import {Request} from '@shared/models/api/request.model';
import {Response} from '@shared/models/api/response.model';

@Catch()
export class ApiErrorFilter implements ExceptionFilter<Error> {
  private readonly logger = new Logger(ApiErrorFilter.name);

  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: Error, host: ArgumentsHost): void {
    const httpArgumentsHost = host.switchToHttp();

    const request = httpArgumentsHost.getRequest<Request>();

    const method = request.method.toUpperCase();
    const path = request.path.toLowerCase();
    const status = exception instanceof HttpException ? exception.getStatus() : 500;
    const time = request.start ? Date.now() - request.start : 0;
    const exceptionResponse = exception instanceof HttpException ? (exception.getResponse() as string | any) : null;

    let data;
    if (typeof exceptionResponse === 'string') {
      data = exceptionResponse;
    } else if (exceptionResponse && exceptionResponse.message) {
      data = exceptionResponse.message;
    } else {
      data = exceptionResponse;
    }

    this.logger.log(`${method} ${path} => ${status}. Took ${time} ms`);

    this.httpAdapterHost.httpAdapter.reply(httpArgumentsHost.getResponse<Response>(), data || null, status);
  }
}
