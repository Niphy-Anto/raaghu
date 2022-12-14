import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsCompAccountNewComponent } from './rds-comp-account-new.component';
import { RdsLabelModule, RdsCheckboxModule, RdsSelectListModule, RdsInputModule } from '@libs/rds-elements';

@NgModule({
  declarations: [
    RdsCompAccountNewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsLabelModule,
    RdsCheckboxModule,
    RdsSelectListModule,
    RdsInputModule
  ],
  exports: [
    RdsCompAccountNewComponent
  ]
})
export class RdsCompAccountNewModule { }
