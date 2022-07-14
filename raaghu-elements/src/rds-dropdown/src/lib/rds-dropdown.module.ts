import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsDropdownComponent } from './rds-dropdown.component';
import { RdsIconModule } from '@libs/rds-icon';

@NgModule({
  declarations: [
    RdsDropdownComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule
  ],
  exports: [
    RdsDropdownComponent
  ]
})
export class RdsDropdownModule { }
