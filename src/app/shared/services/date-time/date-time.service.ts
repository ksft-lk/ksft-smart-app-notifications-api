import {Injectable} from '@nestjs/common';
import moment from 'moment';

@Injectable()
export class DateTimeService {
  minutesOfDayToTimestamp(minutes: number) {
    return moment().startOf('day').add(minutes, 'minutes').format('HH:mm');
  }
}
