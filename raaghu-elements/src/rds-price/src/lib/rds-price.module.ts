import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsLabelModule } from '@libs/rds-label';
import { RdsPriceComponent } from './rds-price.component';



@NgModule({
  declarations: [
    RdsPriceComponent
  ],
  imports: [
    CommonModule,
    RdsLabelModule,
    RdsIconModule
  ],
  exports: [
    RdsPriceComponent
  ]
})
export class RdsPriceModule { }
