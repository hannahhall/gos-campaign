import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from '../class/user';
 
@Injectable()
export class UserService {
  private httpOptions: any;
  public token: string;
  public token_expires: Date;
  public username: string;
  public errors: any = [];
  public currentUser: User;
 
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    this.token = localStorage.getItem('token');
    if (this.token) {
      this.refreshToken();
    }
  }
 
  public login(user) {
    this.http.post('api/api-token-auth/', JSON.stringify(user), this.httpOptions).subscribe(
      data => {
        this.updateData(data['token']);
        this.updateUser(data['user']);
      },
      err => {
        this.errors = err['error'];
      }
    );
  }
 
  public refreshToken() {
    this.http.post('api/api-token-refresh/', JSON.stringify({token: this.token}), this.httpOptions).subscribe(
      data => {
        this.updateData(data['token']);
        this.updateUser(data['user']);
      },
      err => {
        console.log(err)
        this.errors = err['error'];
      }
    );
  }
 
  public logout() {
    this.token = null;
    this.token_expires = null;
    this.username = null;
  }
 
  private updateData(token: string) {
    localStorage.setItem('token', token)
    this.token = token;
    this.errors = []; 
  }

  private updateUser(user: any) {
    this.currentUser = new User(user);
  }
 
}