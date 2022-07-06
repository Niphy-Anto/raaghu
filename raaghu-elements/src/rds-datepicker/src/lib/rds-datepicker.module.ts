import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule, BsDatepickerConfig  } from 'ngx-bootstrap/datepicker';
import { RdsDatepickerComponent } from './rds-datepicker.component';
import { FormsModule } from '@angular/forms';
import { RdsIconModule } from '../../../rds-icon/src/lib/rds-icon.module';

@NgModule({
  declarations: [
    RdsDatepickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RdsIconModule
  ],
  exports: [
    RdsDatepickerComponent
  ],
  providers: [BsDatepickerConfig],

})
export class RdsDatepickerModule { }
