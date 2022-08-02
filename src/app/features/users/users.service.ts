import {Injectable} from '@nestjs/common';
import {ApiService} from '@shared/services/api.service';
import {User} from '@users/entities/user.entity';
import {UsersRepository} from '@users/users.repository';

@Injectable()
export class UsersService extends ApiService<User> {
  constructor(private readonly usersRepository: UsersRepository) {
    super(usersRepository);
  }
}
