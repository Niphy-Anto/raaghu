import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCheckboxModule, RdsDropdownlistModule, RdsInputModule, RdsButtonModule} from '@libs/rds-elements';
import { RdsLabelModule } from '@libs/rds-label';
import { RdsCompClientResourcesComponent } from './rds-comp-client-resources.component';
import { FormsModule } from '@angular/forms';




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
    RdsDropdownlistModule,
    RdsInputModule
  ],
  exports:[
    RdsCompClientResourcesComponent
  ]
})
export class RdsCompClientResourcesModule { }
