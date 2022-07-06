import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsDropdownlistComponent } from './rds-dropdownlist.component';
import { RdsIconModule } from '../../../rds-icon/src/lib/rds-icon.module';
import { RdsBadgeModule } from '../../../rds-badge/src/lib/rds-badge.module';

@NgModule({
  declarations: [
    RdsDropdownlistComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsIconModule,
    RdsBadgeModule
  ],
  exports: [
    RdsDropdownlistComponent
  ]
})
export class RdsDropdownlistModule { }
