import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsBadgeComponent } from './rds-badge.component';
import { RdsIconModule } from '../../../rds-icon/src/lib/rds-icon.module';

@NgModule({
  declarations: [
    RdsBadgeComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule
  ],
  exports: [
    RdsBadgeComponent
  ]
})
export class RdsBadgeModule { }
