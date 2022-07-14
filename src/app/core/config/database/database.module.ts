import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {DATABASE_URL} from '@constants/database';

@Module({
  imports: [
    MongooseModule.forRoot(DATABASE_URL, {
      autoIndex: true,
    }),
  ],
  exports: [MongooseModule],
})
export class DatabaseModule {}
