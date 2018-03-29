import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NewKegComponent } from './new-keg/new-keg.component';
import { NewKeg2Component } from './new-keg-2/new-keg-2.component';
import { TheListComponent } from './the-list/the-list.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NewKegComponent,
    NewKeg2Component,
    TheListComponent,
    EditKegComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
