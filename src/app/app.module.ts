import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { RangeSliderDirective } from './range-slider.directive';
import { NewSliderComponent } from './new-slider/new-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    RangeSliderDirective,
    NewSliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
