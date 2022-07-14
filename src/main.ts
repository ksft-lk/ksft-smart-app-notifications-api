import {NestFactory} from '@nestjs/core';
import {Logger, ValidationPipe} from '@nestjs/common';
import helmet from 'helmet';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {AppModule} from './app/app.module';
import {NODE_ENV, PORT} from '@constants/env';
import {DATABASE_NAME} from '@constants/database';
import {ApiResponseInterceptor} from '@interceptors/api-response.interceptor';
import {ApiErrorFilter} from '@core/filters/api-error.filter';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.useGlobalInterceptors(new ApiResponseInterceptor());

  app.useGlobalFilters(new ApiErrorFilter());

  app.enableCors();
  app.use(helmet());

  const config = new DocumentBuilder()
    .setTitle('KSFT Smart App auth API')
    .setDescription('Authentication service for the Smart App')
    .setVersion('1.0.0')
    .build();

  SwaggerModule.setup('docs', app, SwaggerModule.createDocument(app, config));

  await app.listen(PORT);
};

bootstrap()
  .then(() => {
    const currentTime = new Date();

    Logger.log(`UTC Offset: ${currentTime.getTimezoneOffset()}`);
    Logger.log(`Port: ${PORT}`);
    Logger.log(`Node environment: ${NODE_ENV}`);
    Logger.log(`Database: ${DATABASE_NAME}`);

    return;
  })
  .catch(reason => {
    Logger.warn('Failed to start the server');
    Logger.error(reason);
  });
