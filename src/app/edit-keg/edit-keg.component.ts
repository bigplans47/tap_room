import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-edit-keg',
  templateUrl: './edit-keg.component.html',
  styleUrls: ['./edit-keg.component.css']
})
export class EditKegComponent implements OnInit {
  @Input() childKegs: Keg[];
  @Output() clickSenderLog = new EventEmitter();
  change: boolean;

  constructor() { }

  changeKegInfo() {
    this.change=true;
  }

  lockKegInfo(selectedKeg) {
    let lockedKegInfo = {1: selectedKeg, 2: 'passed in second property in event emitter'}
    // let practice [] = []
    this.clickSenderLog.emit(lockedKegInfo)
    this.change=false;
  }


}
