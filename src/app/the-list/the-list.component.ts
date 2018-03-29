import { Component, Input } from '@angular/core';
import { Keg } from '../models/keg.model'

@Component({
  selector: 'app-the-list',
  templateUrl: './the-list.component.html',
  styleUrls: ['./the-list.component.css']
})
export class TheListComponent {
  // childKegs: [];
  @Input() childKegs: Keg[];

  constructor() { }

  // underTen(kegToCheck) {
  //   return kegToCheck.pints < 10;
  // }

  toggleReorder(singleKeg, boolean){
    singleKeg.reorder = boolean;
    console.log(this.childKegs);
  }
}
