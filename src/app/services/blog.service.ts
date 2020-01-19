import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Blog } from '../class/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private _blogs: BehaviorSubject<Blog[]> = new BehaviorSubject([]);
  private _blog: BehaviorSubject<Blog> = new BehaviorSubject(new Blog({}))

  constructor(private http: HttpClient) {
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

  getOverviewBlog(blogs: Blog[]) {
    const blog = blogs.find(blog => blog.type === 'overview');
    this.setBlog(blog.id);
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
        this.getOverviewBlog(blogs);
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
