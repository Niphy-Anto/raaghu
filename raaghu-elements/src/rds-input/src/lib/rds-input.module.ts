import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsInputComponent } from './rds-input.component';
import { RdsIconModule } from '@libs/rds-icon';

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
