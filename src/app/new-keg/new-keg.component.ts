import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})
export class NewKegComponent {
  @Output() clickSender = new EventEmitter();
  name: string;
  brand: string;
  price: number;
  alcoholContent: number;
  constructor() { }

  addKeg() {

  }
//method to take input from button below, make into a keg, pass to component above
  addButtonClicked() {
    console.log("add button clicked 1");
    //make a new keg from the input in this component
    let kegToAdd = new Keg(this.name,this.brand,this.price,this.alcoholContent);
    //send the new keg from this component to the root component (wrapped in $event);
    this.clickSender.emit(kegToAdd);
  }
}
