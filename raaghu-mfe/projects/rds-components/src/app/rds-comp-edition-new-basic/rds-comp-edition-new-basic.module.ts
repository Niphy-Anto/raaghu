import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsCompEditionNewBasicComponent } from './rds-comp-edition-new-basic.component';
import { RdsInputModule, RdsSelectListModule } from "@libs/rds-elements";


@NgModule({
  declarations: [
    RdsCompEditionNewBasicComponent
  ],
  exports: [
    RdsCompEditionNewBasicComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsInputModule,
    RdsSelectListModule
  ]
})
export class RdsCompEditionNewBasicModule { }
