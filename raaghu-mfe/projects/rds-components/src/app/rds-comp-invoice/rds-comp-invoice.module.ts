import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsCompInvoiceComponent } from './rds-comp-invoice.component';
import { RdsCompInvoiceShimmerComponent } from './rds-comp-invoice-shimmer/rds-comp-invoice-shimmer.component';
import { RdsInputModule, RdsLabelModule, RdsTextareaModule } from '@libs/rds-elements';


@NgModule({
  declarations: [
    RdsCompInvoiceComponent,
    RdsCompInvoiceShimmerComponent
  ],
  exports: [
    RdsCompInvoiceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsLabelModule,
    RdsInputModule,
    RdsTextareaModule
  ]
})
export class RdsCompInvoiceModule { }
