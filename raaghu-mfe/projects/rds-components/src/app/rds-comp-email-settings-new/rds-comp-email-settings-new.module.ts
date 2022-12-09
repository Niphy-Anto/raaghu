import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsCompEmailSettingsNewComponent } from './rds-comp-email-settings-new.component'
import { RdsCheckboxModule, RdsInputModule } from "@libs/rds-elements";

@NgModule({
  declarations: [
    RdsCompEmailSettingsNewComponent
  ],
  exports: [
    RdsCompEmailSettingsNewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsInputModule,
    RdsCheckboxModule
  ]
})
export class RdsCompEmailSettingsNewModule { }
