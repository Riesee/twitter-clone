import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateAgoPipe } from './shared/pipes/date-ago.pipe';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    
  ]
})
export class MainModule { }
