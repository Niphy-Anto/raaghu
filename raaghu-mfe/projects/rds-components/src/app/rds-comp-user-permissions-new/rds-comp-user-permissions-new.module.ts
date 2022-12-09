import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompUserPermissionsNewComponent } from './rds-comp-user-permissions-new.component';
import { RdsButtonModule, RdsCheckboxModule, RdsFabMenuModule, RdsNavTabModule, RdsOffcanvasModule } from '@libs/rds-elements';
import { RdsCompDataTableModule } from '../rds-comp-data-table/rds-comp-data-table.module';
import { RdsCompUserBasicProfileRightModule } from '../rds-comp-user-basic-profile-right/rds-comp-user-basic-profile-right.module';
import { RdsPermissionTreeModule } from '../rds-comp-permission-tree/rds-permission-tree.module';
import { NgxTranslateModule } from '@libs/shared';



@NgModule({
  declarations: [
    RdsCompUserPermissionsNewComponent
  ],
  imports: [
    CommonModule,
    RdsButtonModule,
    RdsFabMenuModule,
    RdsOffcanvasModule,
    RdsNavTabModule,
    RdsCheckboxModule,
    RdsCompDataTableModule,
    RdsPermissionTreeModule,
    RdsCompUserBasicProfileRightModule,
    NgxTranslateModule
  ],
  exports: [
    RdsCompUserPermissionsNewComponent
  ]
})
export class RdsCompUserPermissionsNewModule { }
