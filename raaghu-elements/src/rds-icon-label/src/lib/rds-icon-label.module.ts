import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsIconLabelComponent } from './rds-icon-label.component';



@NgModule({
  declarations: [
    RdsIconLabelComponent
  ],
  imports: [
    RdsIconModule,
    CommonModule
  ],
  exports: [
    RdsIconLabelComponent
  ]
})
export class RdsIconLabelModule { }
