import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  showPassword = false;
  @Input() userName!: string;
  @Input() password!: string;


  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  getUser(): void {
    console.log(this.userName);
    console.log(this.password);

  }

}
