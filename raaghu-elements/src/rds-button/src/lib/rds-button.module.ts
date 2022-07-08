import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsButtonComponent } from './rds-button.component';
import { RdsIconModule } from '../../../rds-icon/src/lib/rds-icon.module';

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
