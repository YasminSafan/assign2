import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceText'
})
export class SliceTextPipe implements PipeTransform {

  transform(value: string, start: number, end: number): string {
    if (!value) return '';
    return value.slice(start, end);
  }
}

