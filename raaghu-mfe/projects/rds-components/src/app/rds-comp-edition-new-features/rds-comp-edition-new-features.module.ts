import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsCompEditionNewFeaturesComponent } from './rds-comp-edition-new-features.component';
import { RdsLabelModule, RdsSelectListModule, RdsCounterModule, RdsCheckboxModule } from "@libs/rds-elements";


@NgModule({
  declarations: [
    RdsCompEditionNewFeaturesComponent
  ],
  exports: [
    RdsCompEditionNewFeaturesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsLabelModule,
    RdsSelectListModule,
    RdsCounterModule,
    RdsCheckboxModule
  ]
})
export class RdsCompEditionNewFeaturesModule { }
