import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {MongooseModule, MongooseModuleFactoryOptions} from '@nestjs/mongoose';
import {EnvironmentConfig} from '@shared/models/env/environment-config.model';

@Module({
  imports: [
    /**
     * Asynchronously initialize the database in order to inject the ConfigService
     */
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService<EnvironmentConfig>): MongooseModuleFactoryOptions => {
        const password = config.get('DATABASE_PASSWORD');
        const name = config.get('DATABASE_NAME');

        return {
          uri: `mongodb://smart-app:${password}@smart-app.mongo.cosmos.azure.com:10255/${name}?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@smart-app@`,
          autoIndex: true,
        };
      },
    }),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
