import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompPlanInformationComponent } from './rds-comp-plan-information.component';
import { RdsButtonModule, RdsIconModule, RdsLabelModule } from '@libs/rds-elements';




@NgModule({
  declarations: [RdsCompPlanInformationComponent],
  imports: [
    CommonModule,
    RdsIconModule,
    RdsLabelModule,
    RdsIconModule,
    RdsButtonModule
  ],
  exports:[]
})
export class RdsCompPlanInformationModule { }
