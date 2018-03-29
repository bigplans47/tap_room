import {Pipe, PipeTransform} from '@angular/core';
import { Keg } from './models/keg.model';

@Pipe({
  name: "needsRefilling",
  pure: false
})

export class NeedsRefillingPipe implements PipeTransform {
  transform(input: Keg[]) {
    let output: Keg[] = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i].pints < 10) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
