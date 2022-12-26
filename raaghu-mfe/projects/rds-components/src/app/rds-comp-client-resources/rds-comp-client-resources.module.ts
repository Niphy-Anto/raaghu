import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCheckboxModule, RdsDropdownlistModule, RdsInputModule } from '@libs/rds-elements';
import { RdsLabelModule } from '@libs/rds-label';
import { RdsCompClientResourcesComponent } from './rds-comp-client-resources.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxTranslateModule } from '@libs/shared';
import { TranslateService, TranslateStore } from '@ngx-translate/core';



@NgModule({
  declarations: [
    RdsCompClientResourcesComponent
  ],
  imports: [
    CommonModule,
    RdsInputModule,
    RdsDropdownlistModule,
    RdsCheckboxModule,
    RdsLabelModule,
    FormsModule,
    ReactiveFormsModule,
    NgxTranslateModule
  ],
  exports: [
    RdsCompClientResourcesComponent
  ]
})
export class RdsCompClientResourcesModule { }
