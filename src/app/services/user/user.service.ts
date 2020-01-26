import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../../class/user/user';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
 
@Injectable()
export class UserService {
  private httpOptions: any;
  private _token: string;
  public token_expires: Date;
  public username: string;
  public errors: any = [];
  private _user: BehaviorSubject<User> = new BehaviorSubject(new User({}));

  get token() {
    return localStorage.getItem('token');
  }

  set token(value) {
    localStorage.setItem('token', value);
  }

  get currentUser() {
    return this._user.asObservable();
  }
 
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    if (this.token) {
      this.refreshToken();
    }
  }
 
  public login(user) {
    this.http.post('api/api-token-auth/', JSON.stringify(user), this.httpOptions).subscribe(
      data => {
        this.updateData(data['token']);
        this.updateUser(data['user']);
        this.errors = [];
      },
      err => {
        this.errors.push(err)
      }
    );
  }
 
  public refreshToken() {
    this.http.post('api/api-token-refresh/', JSON.stringify({token: this.token}), this.httpOptions).subscribe(
      data => {
        this.updateData(data['token']);
        this.updateUser(data['user']);
        this.errors = [];
      },
      err => {
        this.errors.push(err);
        this.logout();
      }
    );
  }
 
  public logout() {
    localStorage.removeItem('token')
    this.token_expires = null;
    this.username = null;
  }
 
  private updateData(token: string) {
    this.token = token;
    this.errors = []; 
  }

  private updateUser(user: any) {
    this._user.next(new User(user));
  }
 
}