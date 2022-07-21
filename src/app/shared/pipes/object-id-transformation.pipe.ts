import {BadRequestException, Injectable, PipeTransform} from '@nestjs/common';
import {Types} from 'mongoose';
import {ArgumentMetadata} from '@nestjs/common/interfaces/features/pipe-transform.interface';

@Injectable()
export class ObjectIdTransformationPipe implements PipeTransform<string | string[], Types.ObjectId | Types.ObjectId[]> {
  transform(payload: string | string[], metadata?: ArgumentMetadata): Types.ObjectId | Types.ObjectId[] {
    const source = metadata ? metadata.type : 'payload';

    if (Array.isArray(payload)) {
      if (!payload.every(value => Types.ObjectId.isValid(value))) {
        throw new BadRequestException(`${source} contains value(s) that are invalid object ids`);
      }

      return payload.map(value => new Types.ObjectId(value));
    } else {
      if (!Types.ObjectId.isValid(payload)) {
        throw new BadRequestException(`${source} value is an invalid object id`);
      }

      return new Types.ObjectId(payload);
    }
  }
}
