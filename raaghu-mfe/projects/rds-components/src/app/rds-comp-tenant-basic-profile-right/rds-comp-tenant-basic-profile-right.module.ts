import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompTenantBasicProfileRightComponent } from './rds-comp-tenant-basic-profile-right.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsButtonModule, RdsCheckboxModule, RdsInputModule, RdsLabelModule, RdsSelectListModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';



@NgModule({
  declarations: [
    RdsCompTenantBasicProfileRightComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RdsInputModule,
    RdsSelectListModule,
    RdsLabelModule,
    RdsCheckboxModule,
    RdsButtonModule,
    NgxTranslateModule
  ],
  exports: [
    RdsCompTenantBasicProfileRightComponent
  ]
})
export class RdsCompTenantBasicProfileRightModule { }
