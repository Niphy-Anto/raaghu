import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompSettingsNewComponent } from './rds-comp-settings-new.component'
import { RdsCompThemeNewModule } from "../rds-comp-theme-new/rds-comp-theme-new.module";
import { RdsCompAccountNewModule } from "../rds-comp-account-new/rds-comp-account-new.module";
import { RdsCompIdentityManagementNewModule } from "../rds-comp-identity-management-new/rds-comp-identity-management-new.module";
import { RdsCompEmailSettingsNewModule } from "../rds-comp-email-settings-new/rds-comp-email-settings-new.module";
import { RdsButtonModule, RdsNavTabModule } from '@libs/rds-elements';


@NgModule({
  declarations: [
    RdsCompSettingsNewComponent
  ],
  exports: [
    RdsCompSettingsNewComponent
  ],
  imports: [
    CommonModule,
    RdsCompThemeNewModule,
    RdsCompAccountNewModule,
    RdsCompIdentityManagementNewModule,
    RdsCompEmailSettingsNewModule,
    RdsButtonModule,
    RdsNavTabModule
  ]
})
export class RdsCompSettingsNewModule { }
