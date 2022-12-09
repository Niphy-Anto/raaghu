import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RdsCompEmailComponent } from './rds-comp-email.component';
import { RdsCompEmailShimmerComponent } from './rds-comp-email-shimmer/rds-comp-email-shimmer.component';
import { RdsButtonModule, RdsInputModule, RdsCheckboxModule } from "@libs/rds-elements";
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';

@NgModule({
  declarations: [
    RdsCompEmailComponent,
    RdsCompEmailShimmerComponent
  ],
  exports: [
    RdsCompEmailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxShimmerLoadingModule,
    RdsButtonModule,
    RdsInputModule,
    RdsCheckboxModule
  ]
})
export class RdsCompEmailModule { }
