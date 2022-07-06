import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsCheckboxComponent } from './rds-checkbox.component';

@NgModule({
  declarations: [
    RdsCheckboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RdsCheckboxComponent
  ]
})
export class RdsCheckboxModule { }
