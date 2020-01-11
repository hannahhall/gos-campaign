import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  blogs: any = {};
  hideBlogs: boolean = true;
  showType: any = {}

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.blogs.subscribe(res => {
      res.forEach(blog => {
        const type = blog.type;
        if (!this.blogs[type]) {
          this.blogs[type] = []
        } 
        this.blogs[type].push(blog);
        this.showType[type] = false;
      });
    });
  }

  toggleSection(type) {
    this.showType[type] = !this.showType[type];
  }

  isShown(type) {
    return this.showType[type];
  }

  goToBlog(id: number) {
    this.blogService.setBlog(id);
  }
}
