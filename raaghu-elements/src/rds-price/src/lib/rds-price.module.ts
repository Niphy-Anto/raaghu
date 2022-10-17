import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsLabelModule } from '@libs/rds-label';
import { RdsPriceComponent } from './rds-price.component';



@NgModule({
  declarations: [
    RdsPriceComponent
  ],
  imports: [
    RdsLabelModule,
    CommonModule
  ],
  exports: [
    RdsPriceComponent
  ]
})
export class RdsPriceModule { }
