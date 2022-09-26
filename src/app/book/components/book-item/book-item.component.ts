import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() book:Book|undefined
  @Output() editBookEmitter = new EventEmitter();
  @Output() deleteBookEmitter = new EventEmitter();
  constructor() {

  }

  ngOnInit(): void {
  }

  editBook(){
    this.editBookEmitter.emit(this.book?.id);
  }

  deleteBook(){
    this.deleteBookEmitter.emit(this.book?.id);
  }
}
