import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Blogs } from '../models/blogs';
 
@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  selectedBlog: Blogs;
  readonly URL_API: string = 'http://localhost:3000/api/blog'

  constructor(private http:HttpClient) { }

  getBlogs() {
    return this.http.get(this.URL_API);
  }

  postBlogs(Blog: Blogs) {
    return this.http.post(this.URL_API, Blog);
  }

  putBlog(Blog: Blogs) {
    return this.http.put(this.URL_API + `/${Blog._id }`, Blog);
  }

  deleteBlog(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
