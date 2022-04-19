import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loopNumber'
})
export class LoopNumberPipe implements PipeTransform {

  transform(value: number): number[] {
    return [...Array(value)].map((_,i) => i);
  }

}
