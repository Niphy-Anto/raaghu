import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsButtonModule, RdsCheckboxModule, RdsDropdownlistModule, RdsInputModule, RdsTextareaModule } from '@libs/rds-elements';
import { RdsLabelModule } from '@libs/rds-label';
import { FormsModule } from '@angular/forms';
import { RdsCompClientBasicsComponent } from './rds-comp-client-basics.component';



@NgModule({
  declarations: [
    RdsCompClientBasicsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RdsInputModule,
    RdsLabelModule,
    RdsDropdownlistModule,
    RdsCheckboxModule,
    FormsModule,
    RdsTextareaModule,
    RdsButtonModule,
    NgxTranslateModule
  ],
  exports: [
    RdsCompClientBasicsComponent
  ]
})
export class RdsCompClientBasicsModule { }
