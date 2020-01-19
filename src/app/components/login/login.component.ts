import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:{
    username: string,
    password: string
  };
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    console.log('login')
    this.user = {
      username: 'dungeon_master',
      password: 'Parkwood1!'
    };
  }

  login() {
    this.userService.login({'username': this.user.username, 'password': this.user.password})
    this.router.navigate([''])
  }
}
