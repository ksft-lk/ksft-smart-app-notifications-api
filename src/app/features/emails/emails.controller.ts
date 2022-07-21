import {Controller, Post} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger';
import {EmailsService} from '@emails/emails.service';

@Controller('emails')
@ApiTags('emails')
export class EmailsController {
  constructor(private readonly emailsService: EmailsService) {}

  @Post()
  async send(): Promise<void> {
    await this.emailsService.send();
  }
}
