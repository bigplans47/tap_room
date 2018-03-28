import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';
  name: string;
  brand: string;
  price: number;
  alcoholContent: number;

  singleKeg2: string = 'test'
  kegs: Keg[] = [
    new Keg('Original Flavor', 'YumCo', 5, 8),
    new Keg('Original Flavor2', 'YumCo2', 52, 82),
  ]
  addKeg() {
    this.kegs.push(new Keg(this.name,this.brand,this.price,this.alcoholContent));
  }
}
