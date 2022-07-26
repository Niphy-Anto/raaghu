import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsRatingComponent } from './rds-rating.component';



@NgModule({
  declarations: [
    RdsRatingComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule
  ],
  exports: [
    RdsRatingComponent
  ]
})
export class RdsRatingModule { }
