import { Pipe, PipeTransform} from '@angular/core';
import { Keg } from './models/keg.model';

@Pipe({
  name: "lessThen10Bucks",
  pure: false
})

export class Under10Bucks implements PipeTransform {
  transform(input: Keg[], args) {
    let output: Keg[] = [];
    for(let i = 0; i<input.length; i++) {
      if (input[i].price < 10) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
