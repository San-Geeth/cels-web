import { Component, Input } from '@angular/core';
import { UserLogin } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  showPassword = false;
  @Input() userName!: string;
  @Input() password!: string;
  loginRequest: UserLogin = { username: '', password: '' };

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  getUser(): void {
    this.loginRequest.username = this.userName;
    this.loginRequest.password = this.password;
    console.log(this.loginRequest)
  }

}
