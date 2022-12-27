import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompClientResourcesComponent } from './rds-comp-client-resources.component';
import { FormsModule } from '@angular/forms';
import { RdsButtonModule, RdsCheckboxModule, RdsDropdownlistModule, RdsLabelModule } from '@libs/rds-elements';



@NgModule({
  declarations: [
    RdsCompClientResourcesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsLabelModule,
    RdsCheckboxModule,
    RdsButtonModule,
    RdsDropdownlistModule
  ],
  exports:[
    RdsCompClientResourcesComponent
  ]
})
export class RdsCompClientResourcesModule { }
