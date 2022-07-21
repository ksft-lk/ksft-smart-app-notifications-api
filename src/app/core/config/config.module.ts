import {Module} from '@nestjs/common';
import {ConfigModule as NestConfigModule} from '@nestjs/config';
import * as Joi from 'joi';
import {DatabaseModule} from '@config//database/database.module';
import {NodeEnvironment} from '@shared/models/environment-config.model';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid(...Object.values(NodeEnvironment))
          .default(NodeEnvironment.DEV),
        PORT: Joi.number().default('3000'),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),
        AUTH_API_URL: Joi.string().required(),
      }),
    }),
    DatabaseModule,
  ],
})
export class ConfigModule {}
