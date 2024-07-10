import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'optional',
  standalone: true
})
export class OptionalPipe implements PipeTransform {

  transform(value: string | undefined | null, replacement?: string): unknown {
    return value ?? replacement ?? '-';
  }

}
