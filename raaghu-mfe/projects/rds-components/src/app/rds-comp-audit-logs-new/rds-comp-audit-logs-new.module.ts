import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsCompAuditLogsNewComponent } from './rds-comp-audit-logs-new.component';
import { RdsCompDataTableModule } from "../rds-comp-data-table/rds-comp-data-table.module";
import {
  RdsButtonModule, RdsInputModule, RdsSelectListModule, RdsIconModule, RdsNavTabModule, RdsDatepickerModule,
  RdsCheckboxModule, RdsFabMenuModule, RdsOffcanvasModule, RdsBadgeModule
} from "@libs/rds-elements";


@NgModule({
  declarations: [
    RdsCompAuditLogsNewComponent
  ],
  exports: [
    RdsCompAuditLogsNewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsCompDataTableModule,
    RdsButtonModule,
    RdsInputModule,
    RdsIconModule,
    RdsNavTabModule,
    RdsDatepickerModule,
    RdsCheckboxModule,
    RdsFabMenuModule,
    RdsSelectListModule,
    RdsOffcanvasModule,
    RdsBadgeModule,
    RdsSelectListModule
  ]
})
export class RdsCompAuditLogsNewModule { }
