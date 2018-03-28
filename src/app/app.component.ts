import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  brand: string;
  price: number;
  alcoholContent: number;
  editingKeg: boolean = false;

  singleKeg2: string = 'test'
  kegs: Keg[] = [
    new Keg('Original Flavor', 'YumCo', 5, 8),
    new Keg('Original Flavor2', 'YumCo2', 52, 82),
  ]
  addKeg() {
    this.kegs.push(new Keg(this.name,this.brand,this.price,this.alcoholContent));
    this.editingKeg = !this.editingKeg;
  }

  removeKeg(kegToRemove) {
    this.kegs = this.kegs.filter(keg => keg != kegToRemove);
  }

  serve(keg) {
    keg.pints-=1;
    // keg.pints = keg.pints -1;
  }
  toggleEdit() {
    this.name = null;
    this.brand = null;
    this.price = null;
    this.alcoholContent = null;
    this.editingKeg = !this.editingKeg;
  }

  underTen(kegToCheck) {
    return kegToCheck.pints < 10;
  }
}
