import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsAlertComponent } from './rds-alert.component';
import { RdsIconModule } from '../../../rds-icon/src/lib/rds-icon.module';

@NgModule({
  declarations: [
    RdsAlertComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsIconModule
  ],
  exports: [
    RdsAlertComponent
  ]
})
export class RdsAlertModule { }
