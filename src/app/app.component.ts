import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // name: string;
  // brand: string;
  // price: number;
  // alcoholContent: number;
  editingKeg: boolean = false;
  employeeDisplay: boolean = true;
  carouselStart: number = 0;
  singleKeg2: string = 'test'
  kegs: Keg[] = [
    new Keg('Original Flavor', 'YumCo', 5, 8),
    new Keg('Original Flavor2', 'YumCo2', 52, 82),
    new Keg('Original Flavor3', 'YumCo2', 52, 82),
    new Keg('Original Flavor4', 'YumCo2', 52, 82),
    new Keg('Original Flavor5', 'YumCo2', 52, 82),
    new Keg('Original Flavor6', 'YumCo2', 52, 82),
    new Keg('Original Flavor7', 'YumCo2', 52, 82),
    new Keg('Original Flavor8', 'YumCo2', 52, 82),
    new Keg('Original Flavor9', 'YumCo2', 52, 82),
    new Keg('Original Flavor10', 'YumCo2', 52, 82)
  ]

  //method to take keg from component below, add to kegs
  addKeg($event) {
    this.kegs.push($event);
  }

  consoleLogEvent($event) {
    console.log($event[0]);
    console.log($event[1]);
  }

  changeKeg($event) {
    this.kegs.find($event)
  }





  removeKeg(kegToRemove) {
    this.kegs = this.kegs.filter(keg => keg != kegToRemove);
  }

  serve(keg) {
    keg.pints-=1;
    // keg.pints = keg.pints -1;
  }
  toggleEdit() {
    // this.name = null;
    // this.brand = null;
    // this.price = null;
    // this.alcoholContent = null;
    this.editingKeg = !this.editingKeg;
  }

  employeeDisplaySet() {
    this.employeeDisplay = !this.employeeDisplay
  }

  turnCarousel() {
    this.carouselStart = (this.carouselStart + 1) % this.kegs.length;
  }
}
