import { Pipe, PipeTransform } from '@angular/core';
import { Partner } from '../partners/models/partner';

@Pipe({
  name: 'keys',
  standalone: true,
})
export class KeysPipe implements PipeTransform {
  transform(key: Partner | undefined, ...args: unknown[]): String[] {
    return key === undefined ? [] : Object.values(key);
  }
}