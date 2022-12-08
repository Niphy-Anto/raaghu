import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompTenantInformationComponent } from './rds-comp-tenant-information.component';
import { FormsModule } from '@angular/forms';
import { RdsCheckboxModule, RdsDatepickerModule, RdsDropdownlistModule, RdsInputModule } from '@libs/rds-elements';
import { RdsCompTenantInformationShimmerComponent } from './rds-comp-tenant-information-shimmer/rds-comp-tenant-information-shimmer.component';



@NgModule({
  declarations: [RdsCompTenantInformationComponent, RdsCompTenantInformationShimmerComponent],
  exports: [RdsCompTenantInformationComponent],
  imports: [
    CommonModule,
    FormsModule,
    RdsInputModule,
    RdsDropdownlistModule,
    RdsCheckboxModule,
    RdsDatepickerModule,

  ]
})
export class RdsCompTenantInformationModule { }
