import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsOrganizationTreeComponent } from './rds-comp-organization-tree.component';
import { RdsButtonComponent, RdsButtonModule, RdsIconModule } from '@libs/rds-elements';
import { RdsCompAlertPopupModule } from '../rds-comp-alert-popup/rds-comp-alert-popup.module';
import { NestGroupDirective } from '../rds-comp-hierarchy/node-label.directive';



@NgModule({
  declarations: [RdsOrganizationTreeComponent,
    NestGroupDirective
  ],
  imports: [
    CommonModule,
    RdsIconModule,
    RdsButtonModule,
    RdsCompAlertPopupModule
  ],
  exports:[RdsOrganizationTreeComponent]
})
export class RdsOrganizationTreeModule { }
