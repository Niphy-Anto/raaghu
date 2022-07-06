import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsTextareaComponent } from './rds-textarea.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RdsTextareaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RdsTextareaComponent
  ]
})
export class RdsTextareaModule { }
