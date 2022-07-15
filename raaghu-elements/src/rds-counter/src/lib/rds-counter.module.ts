import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCounterComponent } from './rds-counter.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RdsCounterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RdsCounterComponent
  ]
})
export class RdsCounterModule { }
