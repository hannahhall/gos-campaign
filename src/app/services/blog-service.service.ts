import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  API_URL = 'http://localhost:8000/api'

  constructor(private http: HttpClient,
    ) { }

  getAllBlogs() {
    return this.http.get(`${this.API_URL}/blogs/`);
  }
}
