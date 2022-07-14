import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCounterComponent } from './rds-counter.component';
import { FormsModule } from '@angular/forms';
import { RdsIconModule } from '../../../rds-icon/src/lib/rds-icon.module';
import { RdsButtonModule } from '@libs/rds-elements';

@NgModule({
  declarations: [
    RdsCounterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsIconModule,
    RdsButtonModule
  ],
  exports: [
    RdsCounterComponent
  ]
})
export class RdsCounterModule { }
