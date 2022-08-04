import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsRadioButtonModule } from '@libs/rds-radio-button';


import { RdsCardDetailComponent } from './rds-card-detail.component';

@NgModule({
  declarations: [
    RdsCardDetailComponent
  ],
  imports: [
    CommonModule,
    RdsRadioButtonModule,
    RdsIconModule,
   
  ],
  exports: [
    RdsCardDetailComponent
  ]
})
export class RdsCardDetailModule { }
