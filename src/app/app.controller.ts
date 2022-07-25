import {Controller, Get, Logger} from '@nestjs/common';
import {Public} from '@decorators/public.decorator';

@Controller('')
export class AppController {
  private readonly logger = new Logger(AppController.name);

  @Get('')
  @Public
  warmupServer(): void {
    this.logger.log('Warming up the application server');
  }
}
