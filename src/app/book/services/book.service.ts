import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books:Book[] = [
    {
      id:1,
      name:"In Search of Lost Time",
      authors:["Marcel Proust"],
      isbn: "9788854173798",
    },
    {
      id:2,
      name:"Ulysses",
      authors:["James Joyce"],
      isbn: "9780330352291",
    },
    {
      id:3,
      name:"One Hundred Years of Solitudes",
      authors:["Miguel de Cervantes"],
      isbn: "9780756971120",
    },
    {
      id:4,
      name:"The Great Gatsby",
      authors:["F. Scott Fitzgerald"],
      isbn: "9780521402378",
    },
    {
      id:5,
      name:"Divine Comedy",
      authors:["Dante Alighieri"],
      isbn: "9781607109914",
    },
    {
      id:6,
      name:"Moby Dick",
      authors:["Herman Melville"],
      isbn: "9780763630188",
    },
    {
      id:7,
      name:"War and Peace",
      authors:["Leo Tolstoy"],
      isbn: "9780393966473",
    },
    {
      id:8,
      name:"Hamlet",
      authors:["William Shakespear"],
      isbn: "9780389209997",
    },
    {
      id:9,
      name:"The Odyssey",
      authors:["Homer"],
      isbn: "9780312866693",
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

  getBook(id:number):Book|undefined {
    return this.books.find(book => book.id === id);
  }
}
