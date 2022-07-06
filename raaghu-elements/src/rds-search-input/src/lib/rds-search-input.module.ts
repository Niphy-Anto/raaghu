import { NgModule } from '@angular/core';
import { RdsIconModule } from '../../../rds-icon/src/lib/rds-icon.module';
import { RdsSearchInputComponent } from './rds-search-input.component';



@NgModule({
  declarations: [
    RdsSearchInputComponent
  ],
  imports: [
    RdsIconModule
  ],
  exports: [
    RdsSearchInputComponent
  ]
})
export class RdsSearchInputModule { }
