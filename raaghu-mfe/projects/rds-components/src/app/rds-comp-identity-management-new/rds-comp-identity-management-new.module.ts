import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsCompIdentityManagementNewComponent } from './rds-comp-identity-management-new.component';
import { RdsCheckboxModule, RdsInputModule, RdsLabelModule } from '@libs/rds-elements';


@NgModule({
  declarations: [
    RdsCompIdentityManagementNewComponent
  ],
  exports: [
    RdsCompIdentityManagementNewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsLabelModule,
    RdsInputModule,
    RdsCheckboxModule
  ]
})
export class RdsCompIdentityManagementNewModule { }
