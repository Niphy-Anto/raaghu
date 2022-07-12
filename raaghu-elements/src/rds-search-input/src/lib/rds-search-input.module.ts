import { NgModule } from '@angular/core';
import { RdsLabelModule } from '../../../rds-label/src/lib/rds-label.module';
import { RdsIconModule } from '../../../rds-icon/src/lib/rds-icon.module';
import { RdsSearchInputComponent } from './rds-search-input.component';



@NgModule({
  declarations: [
    RdsSearchInputComponent
  ],
  imports: [
    RdsIconModule,
    RdsLabelModule

  ],
  exports: [
    RdsSearchInputComponent
  ]
})
export class RdsSearchInputModule { }
