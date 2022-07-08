import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RdsCheckboxParentChildComponent } from './rds-checkbox-parent-child.component';



@NgModule({
  declarations: [
    RdsCheckboxParentChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RdsCheckboxParentChildComponent
  ]
})
export class RdsCheckboxParentChildModule { }
