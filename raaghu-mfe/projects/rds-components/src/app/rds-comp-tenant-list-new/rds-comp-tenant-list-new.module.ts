import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompTenantListNewComponent } from './rds-comp-tenant-list-new.component';
import { RdsButtonModule, RdsFabMenuModule, RdsNavTabModule, RdsOffcanvasModule } from '@libs/rds-elements';
import { RdsCompDataTableModule } from '../rds-comp-data-table/rds-comp-data-table.module';
import { RdsCompTenantBasicProfileRightModule } from '../rds-comp-tenant-basic-profile-right/rds-comp-tenant-basic-profile-right.module';
import { RdsCompTenantFeaturesModule } from '../rds-comp-tenant-features/rds-comp-tenant-features.module';
import { RdsCompAlertModule } from '../rds-comp-alert/rds-comp-alert.module';



@NgModule({
  declarations: [
    RdsCompTenantListNewComponent
  ],
  imports: [
    CommonModule,
    RdsFabMenuModule,
    RdsOffcanvasModule,
    RdsNavTabModule,
    RdsButtonModule,
    RdsCompAlertModule,
    RdsCompDataTableModule,
    RdsCompTenantFeaturesModule,
    RdsCompTenantBasicProfileRightModule
  ],
  exports:[
    RdsCompTenantListNewComponent
  ]
})
export class RdsCompTenantListNewModule { }
