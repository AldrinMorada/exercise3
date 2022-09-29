import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router) {
    this.books = this.bookService.getBooks();
  }

  ngOnInit(): void {}

  edit(id: Event) {
    window.location.href = 'book/book-form/' + id;
  }

  del(id: Event) {
    alert('Deleting book with id: ' + id);
  }

  action(event: string) {
    switch (event) {
      case 'add':
        this.router.navigate(['book/book-form/add']);
        break;
      case 'delete':
        break;
      default:
        console.log(event);
    }
  }
}
