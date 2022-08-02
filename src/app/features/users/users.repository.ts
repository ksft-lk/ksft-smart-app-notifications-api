import {Injectable} from '@nestjs/common';
import {HttpService} from '@nestjs/axios';
import {ApiRepository} from '@shared/repositories/api.repository';
import {User} from '@users/entities/user.entity';

@Injectable()
export class UsersRepository extends ApiRepository<User> {
  constructor(readonly httpService: HttpService) {
    super(httpService);
  }
}
