import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsBigNumberWidgetComponent } from './rds-big-number-widget.component';
import { RdsIconModule } from '../../../rds-icon/src/lib/rds-icon.module';

@NgModule({
  declarations: [
    RdsBigNumberWidgetComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule
  ],
  exports: [
    RdsBigNumberWidgetComponent
  ]
})
export class RdsBigNumberWidgetModule { }
