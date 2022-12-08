import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompTenantInformationComponent } from './rds-comp-tenant-information.component';
import { FormsModule } from '@angular/forms';
import { RdsButtonModule, RdsCheckboxModule, RdsDatepickerModule, RdsDropdownlistModule, RdsInputModule } from '@libs/rds-elements';
import { RdsCompTenantInformationShimmerComponent } from './rds-comp-tenant-information-shimmer/rds-comp-tenant-information-shimmer.component';
import { NgxTranslateModule } from '@libs/shared';



@NgModule({
  declarations: [RdsCompTenantInformationComponent, RdsCompTenantInformationShimmerComponent],
  exports: [RdsCompTenantInformationComponent],
  imports: [
    CommonModule,
    FormsModule,
    RdsInputModule,
    RdsButtonModule,
    RdsDropdownlistModule,
    RdsCheckboxModule,
    RdsDatepickerModule,
    NgxTranslateModule.forRoot()
  ]
})
export class RdsCompTenantInformationModule { }
