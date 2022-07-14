import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsAlertComponent } from './rds-alert.component';
import { RdsIconModule } from '@libs/rds-icon';

@NgModule({
  declarations: [
    RdsAlertComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule
  ],
  exports: [
    RdsAlertComponent
  ]
})
export class RdsAlertModule { }
