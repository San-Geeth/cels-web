import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.css']
})
export class InputPasswordComponent  implements OnInit {

  value!: string;
  @Input() placeholder!: string;
  @Input() size: string = '';

  ngOnInit(): void {
    if(this.size === 'small') {
      this.size = 'p-inputtext-sm'
    } else if(this.size === 'medium') {
      this.size = ''
    } else if(this.size === 'large') {
      this.size = 'p-inputtext-lg'
    }
  }
}
