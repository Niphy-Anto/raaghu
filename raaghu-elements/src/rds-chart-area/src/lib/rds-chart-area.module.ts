import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsChartAreaComponent } from './rds-chart-area.component';

@NgModule({
  declarations: [
    RdsChartAreaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RdsChartAreaComponent
  ]
})
export class RdsChartAreaModule { }
