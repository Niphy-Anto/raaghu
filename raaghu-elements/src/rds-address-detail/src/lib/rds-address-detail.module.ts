import { NgModule } from '@angular/core';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsCardModule } from '../../../root/public-api';
import { RdsAddressDetailComponent } from './rds-address-detail.component';



@NgModule({
  declarations: [
    RdsAddressDetailComponent
  ],
  imports: [
    RdsIconModule,
    RdsCardModule,
  ],
  exports: [
    RdsAddressDetailComponent
  ]
})
export class RdsAddressDetailModule { }
