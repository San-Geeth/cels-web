import { Component, Input } from '@angular/core';
import { CheckBox } from './CheckBox';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent {

  selectedBox!: CheckBox[];
  @Input() checkBoxes!: CheckBox[];

}
