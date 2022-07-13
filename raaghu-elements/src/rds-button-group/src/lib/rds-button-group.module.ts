import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsButtonGroupComponent } from './rds-button-group.component';
import { RdsIconModule } from '@libs/rds-icon';

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
