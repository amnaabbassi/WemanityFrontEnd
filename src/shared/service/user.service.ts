import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) { }

  baseUrl = environment.baseUrl;
  public UserLogin_API = `${this.baseUrl}/users/login`;

  public isLoggedIn(): boolean {
    if (localStorage.getItem("token") !== null) {
      return true;
    } else {
      return false;
    }
  }
  public login(user: User) {
    return this.http.post<User>(this.UserLogin_API, user);
  }
}
