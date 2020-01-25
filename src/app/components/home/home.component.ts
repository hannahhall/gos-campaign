import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog/blog.service';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';
import { Blog } from 'src/app/class/blog';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private blogService: BlogService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.userService.token && !this.userService.errors.length) {
      this.blogService.blog.subscribe((res: Blog) => {
        this.router.navigate(['blogs', 3]);
      });
    } else {
      this.router.navigate(['login']);
    }
  }
}
