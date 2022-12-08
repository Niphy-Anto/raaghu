import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsCompBasicResourceComponent } from './rds-comp-basic-resource.component';
import { RdsCompBasicResourceShimmerComponent } from './rds-comp-basic-resource-shimmer/rds-comp-basic-resource-shimmer.component';
import { RdsInputModule, RdsLabelModule, RdsCheckboxModule, RdsTextareaModule } from "@libs/rds-elements";


@NgModule({
  declarations: [
    RdsCompBasicResourceComponent,
    RdsCompBasicResourceShimmerComponent
  ],
  exports: [
    RdsCompBasicResourceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsInputModule,
    RdsLabelModule,
    RdsCheckboxModule,
    RdsTextareaModule
  ]
})
export class RdsCompBasicResourceModule { }
