import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsWidgetComponent } from './rds-widget.component';
import { RdsIconModule } from '../../../rds-icon/src/lib/rds-icon.module';



@NgModule({
  declarations: [
    RdsWidgetComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule
  ],
  exports: [
    RdsWidgetComponent
  ]
})
export class RdsWidgetModule { }
