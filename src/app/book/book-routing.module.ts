import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookFormComponent } from './pages/book-form/book-form.component';

const routes: Routes = [
  {
    path: 'book',
    component: BookListComponent,
  },
  {
    path: 'book-list',
    component: BookListComponent,
  },
  {
    path: 'book/book-form',
    component: BookFormComponent
  },
  {
    path: 'book/book-form/:$id',
    component: BookFormComponent,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule]
})
export class BookRoutingModule { }
