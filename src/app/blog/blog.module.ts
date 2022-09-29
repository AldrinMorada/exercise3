import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './pages/blog-list/blog-list.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogRoutingModule } from './blog-routing.module';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { BlogFormComponent } from './pages/blog-form/blog-form.component';


@NgModule({
  declarations: [
    BlogListComponent,
    BlogItemComponent,
    BlogFormComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedComponentsModule
  ]
})
export class BlogModule { }
