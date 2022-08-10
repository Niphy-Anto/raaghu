import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RdsStepperComponent } from './rds-stepper.component';



@NgModule({
  declarations: [
    RdsStepperComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    RdsStepperComponent
  ]
})
export class RdsStepperModule { }
