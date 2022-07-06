import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsInputComponent } from './rds-input.component';
import { RdsIconModule } from '../../../rds-icon/src/lib/rds-icon.module';

@NgModule({
  declarations: [
    RdsInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsIconModule
  ],
  exports: [
    RdsInputComponent
  ]
})
export class RdsInputModule { }
