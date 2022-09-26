import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books:Book[]=[];
  constructor(private bookService:BookService) {
    this.books = this.bookService.getBooks();
  }

  ngOnInit(): void {
  }

  edit(id:Event){
    alert("Editing book with id: " + id);
  }

  del(id:Event){
    alert("Deleting book with id: "+ id);
  }
}
