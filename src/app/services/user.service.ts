import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login } from '../interface/login.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedIn: boolean = false;

  constructor(private http: HttpClient) { }

  login(data: login) {
    return this.http.post(environment.base_url + '/authenticate', data);
  }
}
