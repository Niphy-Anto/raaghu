import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsLabelModule } from '@libs/rds-label'
import { RdsBenefitComponent } from './rds-benefit.component';



@NgModule({
  declarations: [
    RdsBenefitComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule,
    RdsLabelModule
  ],
  exports: [
    RdsBenefitComponent
  ]
})
export class RdsBenefitModule { }
