import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompThemeNewComponent } from './rds-comp-theme-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsSelectListModule } from '@libs/rds-elements';



@NgModule({
  declarations: [
    RdsCompThemeNewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RdsSelectListModule
  ],
  exports: [
    RdsCompThemeNewComponent
  ]
})
export class RdsCompThemeNewModule { }
