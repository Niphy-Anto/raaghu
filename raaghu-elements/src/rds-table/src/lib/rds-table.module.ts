import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsTableComponent } from './rds-table.component';
import { RdsIconModule } from '@libs/rds-icon';


@NgModule({
  declarations: [
    RdsTableComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule,
  ],
  exports: [
    RdsTableComponent
  ]
})
export class RdsTableModule { }
