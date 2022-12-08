import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompTenantListComponent } from './rds-comp-tenant-list.component';
import { RdsButtonModule, RdsFabMenuModule, RdsNavTabModule } from '@libs/rds-elements';
import { RdsCompAlertModule } from '../rds-comp-alert/rds-comp-alert.module';
import { RdsCompDataTableModule } from '../rds-comp-data-table/rds-comp-data-table.module';
import { RdsCompTenantInformationShimmerComponent } from '../rds-comp-tenant-information/rds-comp-tenant-information-shimmer/rds-comp-tenant-information-shimmer.component';
import { RdsCompTenantInformationModule } from '../rds-comp-tenant-information/rds-comp-tenant-information.module';
import { RdsCompTenantSettingsModule } from '../rds-comp-tenant-settings/rds-comp-tenant-settings.module';



@NgModule({
  declarations: [RdsCompTenantListComponent,RdsCompTenantInformationShimmerComponent],
  exports: [RdsCompTenantListComponent],
  imports: [
    CommonModule,
    RdsButtonModule,
    RdsCompAlertModule,
    RdsCompDataTableModule,
    RdsFabMenuModule,
    RdsNavTabModule,
    RdsCompTenantInformationModule,
    RdsCompTenantSettingsModule,

  ]
})
export class RdsCompTenantListModule { }
