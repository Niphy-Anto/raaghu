import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompPricingTableComponent } from './rds-comp-pricing-table.component';
import { RdsButtonModule, RdsLabelModule, RdsRadioButtonModule, RdsTableModule } from '@libs/rds-elements';



@NgModule({
  declarations: [
    RdsCompPricingTableComponent
  ],
  imports: [
    CommonModule,
    RdsLabelModule,
    RdsRadioButtonModule,
    RdsTableModule,
    RdsButtonModule
  ],
  exports: [
    RdsCompPricingTableComponent
  ]
})
export class RdsCompPricingTableModule { }
