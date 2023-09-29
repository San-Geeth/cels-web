import { Component, Input } from '@angular/core';
import { RadioButton } from './RadioButton';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css'],
})
export class RadioButtonComponent {

  selectedButton!: RadioButton;
  @Input() radioButtons!: RadioButton[];

}
