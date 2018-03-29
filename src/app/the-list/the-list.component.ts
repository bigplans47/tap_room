import { Component, Input } from '@angular/core';
import { Keg } from '../models/keg.model'

@Component({
  selector: 'app-the-list',
  templateUrl: './the-list.component.html',
  styleUrls: ['./the-list.component.css']
})
export class TheListComponent implements OnInit {
  // childKegs: [];
  @Input() childKegs: Keg[];

  constructor() { }

  underTen(kegToCheck) {
    return kegToCheck.pints < 10;
  }
}
