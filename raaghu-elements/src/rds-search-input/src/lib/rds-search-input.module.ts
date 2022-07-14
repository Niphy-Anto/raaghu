import { NgModule } from '@angular/core';
import { RdsIconModule } from '@libs/rds-icon';
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
