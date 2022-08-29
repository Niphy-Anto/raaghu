import { NgModule } from '@angular/core';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsStatComponent } from './rds-stat.component';



@NgModule({
  declarations: [
    RdsStatComponent
  ],
  imports: [RdsIconModule
  ],
  exports: [
    RdsStatComponent
  ]
})
export class RdsStatModule { }
