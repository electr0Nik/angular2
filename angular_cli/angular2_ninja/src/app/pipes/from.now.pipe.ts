
import { PipeTransform, Pipe } from '@angular/core';

import * as moment from 'moment';

@Pipe({ name: 'fromNow' })
export class FromNowPipe implements PipeTransform {

  transform(value, args: boolean) {
    console.log('expercted format for value: yyyy, mm starting by 0, dd');
    console.log(moment(value).fromNow(args));
    return moment(value).fromNow(args);
  }
}
