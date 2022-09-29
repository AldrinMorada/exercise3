import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {

  @Input() blog:Blog | undefined;
  @Output() editBlogEmitter = new EventEmitter();
  @Output() deleteBlogEmitter = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
  }

  editBlog(){
    this.editBlogEmitter.emit(this.blog?.id);
  }

  deleteBlog(){
    this.deleteBlogEmitter.emit(this.blog?.id);
  }

}
