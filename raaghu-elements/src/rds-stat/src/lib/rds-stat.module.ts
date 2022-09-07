
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsStatComponent } from './rds-stat.component';



@NgModule({
  declarations: [
    RdsStatComponent
  ],
  imports: [RdsIconModule,CommonModule
  ],
  exports: [
    RdsStatComponent
  ]
})
export class RdsStatModule { }
