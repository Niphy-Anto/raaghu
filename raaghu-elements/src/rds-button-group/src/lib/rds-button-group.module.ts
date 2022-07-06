import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsButtonGroupComponent } from './rds-button-group.component';
import { RdsIconModule } from '../../../rds-icon/src/lib/rds-icon.module';

@NgModule({
  declarations: [
    RdsButtonGroupComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule
  ],
  exports: [
    RdsButtonGroupComponent
  ]
})
export class RdsButtonGroupModule { }
