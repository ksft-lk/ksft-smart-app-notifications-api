import {Injectable} from '@nestjs/common';
import {EmailsRepository} from '@emails/emails.repository';

@Injectable()
export class EmailsService {
  constructor(private readonly emailsRepository: EmailsRepository) {}

  async send(): Promise<void> {
    await this.emailsRepository.send();
  }
}
