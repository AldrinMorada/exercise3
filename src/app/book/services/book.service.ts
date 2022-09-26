import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books:Book[] = [
    {
      id:1,
      name:"Book of Air",
      authors:["Author 1", "Author 2"],
      isbn: "isbn",
    },
    {
      id:2,
      name:"Book of Spirits",
      authors:["Author 1", "Author 2"],
      isbn: "isbn",
    },
    {
      id:3,
      name:"Book of Change",
      authors:["Author 1", "Author 2"],
      isbn: "isbn",
    },
    {
      id:4,
      name:"Book of Balance",
      authors:["Author 1", "Author 2"],
      isbn: "isbn",
    }
  ];
  constructor() {}

  addBook(id:number,name:string,authors:string[],isbn:string,){
    this.books.push({
      id: id,
      name: name,
      authors: authors,
      isbn: isbn,
    })
  }

  getBooks():Book[] {
    return this.books;
  }
}
