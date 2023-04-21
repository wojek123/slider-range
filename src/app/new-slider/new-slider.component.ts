import { Component } from '@angular/core';

@Component({
  selector: 'app-new-slider',
  templateUrl: './new-slider.component.html',
  styleUrls: ['./new-slider.component.scss']
})
export class NewSliderComponent {
  public start: number = 0;
  public end: number = 100;
  public step = 1;
  public minVal: number = 0;
  public maxVal: number = 24;

  public setMinValue(event: any) {
    console.log('min', event.target?.value && event.target.value < this.maxVal)
    if (event.target?.value) {
      if (event.target.value < this.maxVal) {

        this.minVal = event.target.value;
      } else { this.minVal = this.maxVal - this.step }
    }
  }

  public setMaxValue(event: any) {

    console.log('max', event.target?.value && event.target.value > this.minVal)
    if (event.target?.value ) {
      if( event.target.value > this.minVal) {
        this.maxVal = event.target.value;
      } else {
        this.maxVal = this.minVal + this.step
      }
    }
  }
  public getLeftThumbPosition(): string {
    return `${(this.minVal / this.end) * 100}%`;
  }
  public getRightThumbPosition(): string {
    return `${(this.maxVal / this.end) * 100}%`;
  }


  public range = { min: 0, max: 100 }

  // input type

}
