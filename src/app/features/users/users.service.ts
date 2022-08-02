import {Injectable} from '@nestjs/common';
import {ApiService} from '@shared/services/api.service';
import {User} from '@users/entities/user.entity';
import {UsersRepository} from '@users/users.repository';
import {AuthorizeUserDto} from '@users/dto/authorize-user.dto';

@Injectable()
export class UsersService extends ApiService<User> {
  constructor(private readonly usersRepository: UsersRepository) {
    super(usersRepository);
  }

  async authorize(dto: AuthorizeUserDto): Promise<User> {
    const {data} = await this.usersRepository.authorize(dto);

    return data;
  }
}
