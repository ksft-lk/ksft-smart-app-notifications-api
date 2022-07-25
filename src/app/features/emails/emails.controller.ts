import {Body, Controller, ParseArrayPipe, Post} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger';
import {EmailsService} from '@emails/emails.service';
import {SendEmailDto} from '@emails/dto/send-email.dto';
import {PayloadExistenceValidationPipe} from '@shared/pipes/payload-existence-validation.pipe';

@Controller('emails')
@ApiTags('emails')
export class EmailsController {
  constructor(private readonly emailsService: EmailsService) {}

  @Post('send')
  async send(
    @Body(new ParseArrayPipe({items: SendEmailDto}), new PayloadExistenceValidationPipe()) dtoList: SendEmailDto[],
  ): Promise<void> {
    await this.emailsService.send(dtoList);
  }
}
