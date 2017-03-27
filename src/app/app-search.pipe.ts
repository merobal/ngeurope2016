import { Pipe, PipeTransform } from '@angular/core';
import { each, isString, find } from 'lodash';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {
  transform(array: any[], q: string): any {
    if (q && q.length > 0) {
      var _return: any[] = [];
      each(array, object => {
        each(object, field => {
          if (isString(field) && !find(_return, object) && field.toLowerCase().indexOf(q.toLowerCase()) > -1) {
            _return.push(object);
          }
        });
      });
    } else {
      var _return = array;
    }

    return _return;
  }
}
