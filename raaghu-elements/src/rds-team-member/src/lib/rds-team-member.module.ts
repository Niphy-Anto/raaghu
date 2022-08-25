import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsLabelModule } from '@libs/rds-label';
import { RdsProductImageModule } from '@libs/rds-product-image';
import { RdsTeamMemberComponent } from './rds-team-member.component';



@NgModule({
  declarations: [
    RdsTeamMemberComponent
  ],
  imports: [
    CommonModule,
    RdsProductImageModule,
    RdsLabelModule,
    RdsIconModule
  ],
  exports: [
    RdsTeamMemberComponent  ]
})
export class RdsTeamMemberModule { }
