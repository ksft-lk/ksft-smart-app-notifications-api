import {Module} from '@nestjs/common';
import {UsersService} from '@users/users.service';
import {UsersRepository} from '@users/users.repository';
import {HttpModule} from '@nestjs/axios';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {EnvironmentConfig} from '@shared/models/env/environment-config.model';
import {ApiResources} from '@constants/resource.constants';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService<EnvironmentConfig, true>) => ({
        baseURL: `${configService.get('AUTH_API_URL')}/${ApiResources.USERS}`,
      }),
    }),
  ],
  providers: [UsersService, UsersRepository],
  exports: [UsersService],
})
export class UsersModule {}
