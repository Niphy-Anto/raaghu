import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsIconComponent } from './rds-icon.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    RdsIconComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    RdsIconComponent
  ]
})
export class RdsIconModule { }
