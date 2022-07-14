import {Module} from '@nestjs/common';
import {ConfigModule as NestConfigModule} from '@nestjs/config';
import {DatabaseModule} from './database/database.module';

@Module({
  imports: [NestConfigModule.forRoot(), DatabaseModule],
})
export class ConfigModule {}
