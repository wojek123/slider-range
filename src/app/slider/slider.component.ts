import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  name = 'Sampling Depth Slider Demo';
  defaultValues = { min: 0, max: 100 };
  relevantValues = { min: 0, max: 100 };
  oldSelectionValues = { min: 0, max: 100 };
  newSelectionValues = { min: 0, max: 100 };
}
