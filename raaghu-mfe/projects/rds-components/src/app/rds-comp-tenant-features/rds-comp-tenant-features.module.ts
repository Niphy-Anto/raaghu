import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompTenantFeaturesComponent } from './rds-comp-tenant-features.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsButtonModule, RdsCheckboxModule, RdsCounterModule, RdsLabelModule, RdsSelectListModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';



@NgModule({
  declarations: [
    RdsCompTenantFeaturesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RdsButtonModule,
    RdsLabelModule,
    RdsSelectListModule,
    RdsCounterModule,
    RdsCheckboxModule,
    NgxTranslateModule,
  ],
  exports: [
    RdsCompTenantFeaturesComponent
  ]
})
export class RdsCompTenantFeaturesModule { }
