import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsButtonComponent } from './rds-button.component';
import { RdsIconModule } from '@libs/rds-icon';

@NgModule({
  declarations: [
    RdsButtonComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule
  ],
  exports: [
    RdsButtonComponent
  ]
})
export class RdsButtonModule { }
