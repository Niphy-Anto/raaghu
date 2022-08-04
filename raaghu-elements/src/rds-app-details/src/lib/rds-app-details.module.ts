import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsCheckboxModule } from '@libs/rds-checkbox';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsAppDetailsComponent } from './rds-app-details.component';
@NgModule({
  declarations: [
    RdsAppDetailsComponent
  ],
  imports: [
    CommonModule,
    RdsCheckboxModule,
    RdsIconModule
  ],
  exports: [
    RdsAppDetailsComponent
  ]
})
export class RdsAppDetailsModule { }
