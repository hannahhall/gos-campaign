import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Blog } from '../class/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private _blogs: BehaviorSubject<Blog[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    this.loadInitialData();
  }

  get blogs() {
    return this._blogs.asObservable();
  }

  getAllBlogs() {
    return this.http.get(`api/blogs/`);
  }

  loadInitialData() {
    this.getAllBlogs().subscribe(
      (res: any) => {
        let blogs = res.map((blog: any) =>
          new Blog({
            id:blog.id, 
            description:blog.description,
            title: blog.title,
            image: blog.image,
            type: blog.type
          })
        );
        this._blogs.next(blogs);
      },
      err => console.log('Error getting blogs', err)
    );
  }    
}
