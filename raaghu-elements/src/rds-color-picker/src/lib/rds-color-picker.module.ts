import { NgModule } from '@angular/core';
import { RdsColorPickerComponent } from './rds-color-picker.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RdsColorPickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RdsColorPickerComponent,
   
  ]
})
export class RdsColorPickerModule { }
