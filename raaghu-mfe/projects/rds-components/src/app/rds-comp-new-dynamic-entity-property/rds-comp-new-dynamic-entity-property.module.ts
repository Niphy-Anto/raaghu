import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsCompNewDynamicEntityPropertyComponent } from './rds-comp-new-dynamic-entity-property.component';
import { RdsCompNewDynamicEntityShimmerComponent } from './rds-comp-new-dynamic-entity-shimmer/rds-comp-new-dynamic-entity-shimmer.component';
import { RdsLabelModule, RdsButtonModule, RdsDropdownlistModule } from "@libs/rds-elements";


@NgModule({
  declarations: [
    RdsCompNewDynamicEntityPropertyComponent,
    RdsCompNewDynamicEntityShimmerComponent
  ],
  exports: [
    RdsCompNewDynamicEntityPropertyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RdsLabelModule,
    RdsButtonModule,
    RdsDropdownlistModule
  ]
})
export class RdsCompNewDynamicEntityPropertyModule { }
