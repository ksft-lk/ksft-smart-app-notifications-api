import {Module} from '@nestjs/common';
import {FeaturesModule} from '@features/features.module';
import {ConfigModule} from '@config/config.module';

@Module({
  imports: [ConfigModule, FeaturesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
