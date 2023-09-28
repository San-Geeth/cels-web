import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-text-area',
  templateUrl: './input-text-area.component.html',
  styleUrls: ['./input-text-area.component.css']
})
export class InputTextAreaComponent {

  value!: string;
  @Input() width: string = ''
  @Input() placeHolder: string = ''
}
