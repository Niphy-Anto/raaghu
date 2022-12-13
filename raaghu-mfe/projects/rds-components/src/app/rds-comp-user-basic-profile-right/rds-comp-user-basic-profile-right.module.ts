import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompUserBasicProfileRightComponent } from './rds-comp-user-basic-profile-right.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsButtonModule, RdsCheckboxModule, RdsInputModule } from '@libs/rds-elements';
import { NgxTranslateModule } from '@libs/shared';



@NgModule({
  declarations: [
    RdsCompUserBasicProfileRightComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RdsInputModule,
    RdsCheckboxModule,
    RdsButtonModule,
    NgxTranslateModule,

  ],
  exports: [
    RdsCompUserBasicProfileRightComponent
  ]
})
export class RdsCompUserBasicProfileRightModule { }
