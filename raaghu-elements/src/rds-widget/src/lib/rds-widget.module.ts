import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsWidgetComponent } from './rds-widget.component';
import { RdsIconModule } from '@libs/rds-icon';



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
