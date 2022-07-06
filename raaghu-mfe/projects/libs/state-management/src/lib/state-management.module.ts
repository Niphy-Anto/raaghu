import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StateManagementComponent } from './state-management.component';



@NgModule({
  declarations: [
    StateManagementComponent
  ],
  imports: [
    HttpClientModule
  ],
  exports: [
    StateManagementComponent
  ]
})
export class StateManagementModule { }
