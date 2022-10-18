import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsCardModule } from '../../../root/public-api';
import { RdsAddressDetailComponent } from './rds-address-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    RdsAddressDetailComponent,
    
  ],
  imports: [
    RdsIconModule,
    RdsCardModule,
    CommonModule
  ],
  exports: [
    RdsAddressDetailComponent
  ]
})
export class RdsAddressDetailModule { }
