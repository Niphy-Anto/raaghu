import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsPaginationComponent } from './rds-pagination.component';
import { FormsModule } from '@angular/forms';
import { RdsIconModule } from '@libs/rds-icon';

@NgModule({
  declarations: [
    RdsPaginationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsIconModule
  ],
  exports: [
    RdsPaginationComponent
  ]
})
export class RdsPaginationModule { }
