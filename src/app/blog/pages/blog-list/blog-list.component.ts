import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogs:Blog[] = [];
  constructor(private blogService:BlogService, private route: ActivatedRoute, private router: Router) {
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

  action(event: string) {
    switch (event) {
      case 'add':
        this.router.navigate(['blog/blog-form/add']);
        break;
      case 'delete':
        break;
      default:
        console.log(event);
    }
  }
}
