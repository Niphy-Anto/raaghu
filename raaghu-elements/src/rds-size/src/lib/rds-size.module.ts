import { NgModule } from '@angular/core';
import { RdsSizeComponent } from './rds-size.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    RdsSizeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [
    RdsSizeComponent
  ]
})
export class RdsSizeModule { }
