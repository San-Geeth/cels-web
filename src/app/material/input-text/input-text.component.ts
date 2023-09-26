import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {

  value!: string;
  @Input() placeholder!: string;
  @Input() size: string = '';
  @Input() width: string = '';

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
