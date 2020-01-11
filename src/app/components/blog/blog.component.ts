import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { Blog } from 'src/app/class/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class BlogComponent implements OnInit {
  blog: Blog

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.blog.subscribe(res => {
      this.blog = res
    })
  }

}
