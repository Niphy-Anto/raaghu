import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsFeatureListComponent } from './rds-feature-list.component';



@NgModule({
  declarations: [
    RdsFeatureListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RdsFeatureListComponent
  ]
})
export class RdsFeatureListModule { }
