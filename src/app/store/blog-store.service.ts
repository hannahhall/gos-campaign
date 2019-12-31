import { Injectable } from '@angular/core';
import { Blog } from '../class/blog';
import { BlogService } from '../services/blog-service.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogStore {

  private _blogs: BehaviorSubject<Blog[]> = new BehaviorSubject([]);

  constructor(private blogService: BlogService) {
    this.loadInitialData();
  }

  get blogs() {
    return this._blogs
  }

  loadInitialData() {
    this.blogService.getAllBlogs().subscribe(
      (res: any) => {
        console.log(res)
        // let blogs = res.map((blog: any) =>
        //   new Blog({
        //     id:blog.id, 
        //     description:blog.description,
        //     title: blog.title,
        //     image: blog.image,
        //     type: blog.type
        //   })
        // );

        // this._blogs.next(blogs);
      }
    );
  }    
}
