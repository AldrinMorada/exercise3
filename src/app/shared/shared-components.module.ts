import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandBarComponent } from './components/command-bar/command-bar.component';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [CommandBarComponent,HeaderComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[CommandBarComponent,HeaderComponent]
})
export class SharedComponentsModule { }
