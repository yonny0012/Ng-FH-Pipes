import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayusculas',
})
export class MayusculasPipe implements PipeTransform {
  transform(value: string, mayus: boolean = true): string {
    return mayus ? value.toUpperCase() : value.toLowerCase();
  }
}
