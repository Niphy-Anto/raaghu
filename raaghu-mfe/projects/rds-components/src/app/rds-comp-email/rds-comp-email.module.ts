import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompEmailComponent } from './rds-comp-email.component';
import { RdsCompEmailShimmerComponent } from './rds-comp-email-shimmer/rds-comp-email-shimmer.component';
import { FormsModule } from '@angular/forms';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { NgxTranslateModule } from '@libs/shared';
import { RdsButtonModule, RdsCheckboxModule, RdsInputModule } from '@libs/rds-elements';



@NgModule({
  declarations: [RdsCompEmailComponent,RdsCompEmailShimmerComponent],
  exports:[RdsCompEmailComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxShimmerLoadingModule,
    NgxTranslateModule.forRoot(),
    RdsInputModule,
    RdsCheckboxModule,
    RdsButtonModule,
  ]
})
export class RdsCompEmailModule { }
