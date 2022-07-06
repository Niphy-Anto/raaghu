import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RdsCheckboxGroupsComponent } from './rds-checkbox-groups.component';



@NgModule({
  declarations: [
    RdsCheckboxGroupsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RdsCheckboxGroupsComponent
  ]
})
export class RdsCheckboxGroupsModule { }
