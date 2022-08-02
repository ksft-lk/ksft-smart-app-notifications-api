import {Injectable} from '@nestjs/common';
import {HttpService} from '@nestjs/axios';
import {AxiosResponse} from 'axios';
import {ApiRepository} from '@shared/repositories/api.repository';
import {User} from '@users/entities/user.entity';
import {AuthorizeUserDto} from '@users/dto/authorize-user.dto';

@Injectable()
export class UsersRepository extends ApiRepository<User> {
  constructor(readonly httpService: HttpService) {
    super(httpService);
  }

  async authorize(dto: AuthorizeUserDto): Promise<AxiosResponse<User>> {
    return await this.httpService.axiosRef.post<User>(`/authorize`, dto, {
      headers: ApiRepository.createHeaders(null),
    });
  }
}
