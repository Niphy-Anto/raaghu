import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsDropdownComponent } from './rds-dropdown.component';
import { RdsIconModule } from '../../../rds-icon/src/lib/rds-icon.module';

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
