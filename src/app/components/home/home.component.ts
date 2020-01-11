import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private blogStore: BlogService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    // if (!this.userService.token) {
    //   this.router.navigate(['login'])
    // }
    this.router.navigate(['blogs/1'])
  }
}
