import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply'
})
export class MultiplyPipe implements PipeTransform {

  transform(value: number, multiply: string): number {
    let mul = parseFloat(multiply);
    return mul * value;
  }

}
