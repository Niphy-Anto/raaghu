import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsTableComponent } from './rds-table.component';

@NgModule({
  declarations: [
    RdsTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RdsTableComponent
  ]
})
export class RdsTableModule { }
