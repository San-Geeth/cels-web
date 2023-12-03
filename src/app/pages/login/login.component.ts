import { Component } from '@angular/core';
import { loginResponse } from 'src/app/interface/logenResponse.interface';
import { login } from 'src/app/interface/login.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName!: string;
  password!: string;
  loginRequest!: login;
  loginRes!: loginResponse

  constructor(
    private userService: UserService
  ) {
    this.loginRequest = {
      userName: '', 
      password: ''
    };
  }
  
  OnLogin() {
    this.loginRequest.userName = this.userName;
    this.loginRequest.password = this.password;
    this.userService.login(this.loginRequest).subscribe(response => {
      console.log("Response", response)
    });
  }
}
