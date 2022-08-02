import {Module} from '@nestjs/common';
import {APP_GUARD} from '@nestjs/core';
import {FeaturesModule} from '@features/features.module';
import {ConfigModule} from '@config/config.module';
import {AuthGuard} from '@guards/auth.guard';
import {AppController} from '@app/app.controller';

@Module({
  imports: [ConfigModule, FeaturesModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
