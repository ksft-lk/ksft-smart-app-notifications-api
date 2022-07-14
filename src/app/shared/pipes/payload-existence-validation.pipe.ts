import {BadRequestException, Injectable, PipeTransform} from '@nestjs/common';

@Injectable()
export class PayloadExistenceValidationPipe implements PipeTransform {
  transform(payload: unknown): any {
    if (!Object.keys(payload).length) {
      throw new BadRequestException('Payload should not be empty');
    }

    return payload;
  }
}
