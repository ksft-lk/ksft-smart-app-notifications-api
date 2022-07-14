import {NestFactory} from '@nestjs/core';
import {AppModule} from './app/app.module';
import helmet from 'helmet';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {NODE_ENV, PORT} from './app/core/constants/env';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.use(helmet());

  const config = new DocumentBuilder()
    .setTitle('KSFT NestJS template')
    .setDescription('Base template for NestJS applications')
    .setVersion('1.0.0')
    .build();

  SwaggerModule.setup('api', app, SwaggerModule.createDocument(app, config));

  await app.listen(PORT);
};

bootstrap()
  .then(() => {
    const currentTime = new Date();

    console.log(`Successfully started the server at ${currentTime.toLocaleString()}`);

    console.info(`UTC Offset: ${currentTime.getTimezoneOffset()}`);
    console.info(`Port: ${PORT}`);
    console.info(`Node environment: ${NODE_ENV}`);

    return;
  })
  .catch(reason => {
    console.warn('Failed to start the server');
    console.error(reason);
  });
