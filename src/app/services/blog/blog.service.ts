import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Blog } from '../../class/blog/blog';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private _blogs: BehaviorSubject<Blog[]> = new BehaviorSubject([]);
  private _blog: BehaviorSubject<Blog> = new BehaviorSubject(new Blog({}))

  constructor(private http: HttpClient, private router: Router) {
    this.loadInitialData();
  }

  get blogs() {
    return this._blogs.asObservable();
  }

  get blog() {
    return this._blog.asObservable();
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
        if (this.router.url.includes('blogs')) {
          const id = this.router.url.split('/').pop()
          console.log(id)
          this.setBlog(parseInt(id));
        }
        this._blogs.next(blogs);
      },
      err => console.log('Error getting blogs', err)
    );
  }

  setBlog(id: number) {
    return this.http.get(`api/blogs/${id}`).subscribe(
      (res: any) => {
        let blog = new Blog(res);
        this._blog.next(blog);
      }
    )
  }
}
