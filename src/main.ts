import 'isomorphic-fetch';
import {NestFactory} from '@nestjs/core';
import {Logger, ValidationPipe} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import helmet from 'helmet';
import {AppModule} from '@app/app.module';
import {ApiResponseInterceptor} from '@interceptors/api-response.interceptor';
import {ApiErrorFilter} from '@filters/api-error.filter';
import {EnvironmentConfig} from '@shared/models/env/environment-config.model';

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
    .setTitle('KSFT Smart App Notification API')
    .setDescription('Notification API service for the Smart App')
    .setVersion('1.0.0')
    .build();

  SwaggerModule.setup('api', app, SwaggerModule.createDocument(app, config));

  const configService = app.get(ConfigService<EnvironmentConfig, true>);

  await app.listen(configService.get('PORT'));

  const currentTime = new Date();

  Logger.log(`UTC Offset: ${currentTime.getTimezoneOffset()}`);
  Logger.log(`Port: ${configService.get('PORT')}`);
  Logger.log(`Node environment: ${configService.get('NODE_ENV')}`);
  Logger.log(`Database: ${configService.get('DATABASE_NAME')}`);
};

bootstrap().catch(reason => {
  Logger.warn('Failed to start the server');
  Logger.error(reason);
});
