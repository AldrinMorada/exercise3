import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';

const routes: Routes = [
  {
    path: 'blog',
    component: BlogListComponent,
  },
  {
    path: 'blog/blog-form',
    component: BlogFormComponent,
  },
  {
    path: 'blog/blog-form/:id',
    component: BlogFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
