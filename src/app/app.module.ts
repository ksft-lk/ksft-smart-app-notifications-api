import {Module} from '@nestjs/common';
import {FeaturesModule} from '@features/features.module';
import {ConfigModule} from '@config/config.module';
import {AppController} from '@app/app.controller';

@Module({
  imports: [ConfigModule, FeaturesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
