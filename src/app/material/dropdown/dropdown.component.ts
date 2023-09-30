import { Component, Input } from '@angular/core';
import { Dropdown } from './Dropdown';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

  selectedOption!: Dropdown;
  @Input() options: Dropdown[] = [];

}
