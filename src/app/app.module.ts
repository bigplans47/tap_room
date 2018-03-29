import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NewKegComponent } from './new-keg/new-keg.component';
import { TheListComponent } from './the-list/the-list.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';
import { NeedsRefillingPipe } from './needs-refilling.pipe';
import { Under10Bucks } from './less-then-10-price.pipe'

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NewKegComponent,
    TheListComponent,
    EditKegComponent,
    NeedsRefillingPipe,
    Under10Bucks
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
