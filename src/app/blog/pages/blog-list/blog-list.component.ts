import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogs:Blog[] = [];
  constructor(private blogService:BlogService) {
    this.blogs = blogService.getBlogs();
  }

  ngOnInit(): void {
  }

  edit(id:Event){
    alert("Editing blog with id: " + id);
  }

  del(id:Event){
    alert("Deleting blog with id: "+ id);
  }
}
