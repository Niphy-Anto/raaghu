import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompClaimsComponent } from './rds-comp-claims.component';
import { FormsModule } from '@angular/forms';
import { RdsButtonModule, RdsCheckboxModule, RdsLabelModule } from '@libs/rds-elements';



@NgModule({
  declarations: [
    RdsCompClaimsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsLabelModule,
    RdsCheckboxModule,
    RdsButtonModule,
  ],
  exports:[
    RdsCompClaimsComponent
  ]
})
export class RdsCompClaimsModule { }
