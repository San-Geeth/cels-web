import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  constructor(
    private elementRef: ElementRef
  ) {}

  title = 'cels-web';

  ngAfterViewInit(): void {
    const gradientColors = [
      '#FCFCFF', // Light gray color
      '#696969'  // Dark gray color
    ];
    const gradientDirection = 'to bottom'; // You can change this to control the gradient direction
  
    this.elementRef.nativeElement.ownerDocument.body.style.background = `linear-gradient(${gradientDirection}, ${gradientColors.join(', ')})`;
  }
}
