import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/header/header.component';
import { IndexComponent } from './index/index.component';
import { SharedComponentsModule } from './shared/shared-components.module';
import { BookModule } from './book/book.module';
import { BlogModule } from './blog/blog.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedComponentsModule,
    BookModule,
    BlogModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}



