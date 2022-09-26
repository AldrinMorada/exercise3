import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs:Blog[] = [
    {
      id: 1,
      title: "Ang alamat ni",
      description: "Ang alamat ni invisible guy.",
      author: "Invisible Author",
      comments: []
    },
    {
      id: 2,
      title: "Ang alamat ng kamote driver",
      description: "Ang alamat ni camote guy.",
      author: "Kamote Author",
      comments: []
    }
  ]
  constructor() { }

  getBlogs():Blog[]{
    return this.blogs;
  }

}
