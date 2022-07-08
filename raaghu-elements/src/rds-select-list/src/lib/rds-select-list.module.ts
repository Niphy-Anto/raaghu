import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsSelectListComponent } from './rds-select-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RdsSelectListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RdsSelectListComponent
  ]
})
export class RdsSelectListModule { }
