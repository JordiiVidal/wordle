import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loopWord'
})
export class LoopWordPipe implements PipeTransform {

  transform(value: string): string[] {
    return [...Array(value.length)].map((_, i) => value[i]);
  }

}
