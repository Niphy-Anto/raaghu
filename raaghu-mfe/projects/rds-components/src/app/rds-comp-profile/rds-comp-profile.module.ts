import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdsCompProfileComponent } from './rds-comp-profile.component';
import { RdsCompLinkedAccountsModule } from "../rds-comp-linked-accounts/rds-comp-linked-accounts.module";
import {
  RdsIconModule, RdsLabelModule, RdsButtonModule, RdsModalModule, RdsOffcanvasModule,
  RdsAvatarModule, RdsNavTabModule, RdsDropdownlistModule
} from '@libs/rds-elements';

@NgModule({
  declarations: [
    RdsCompProfileComponent
  ],
  exports: [
    RdsCompProfileComponent
  ],
  imports: [
    CommonModule,
    RdsIconModule,
    RdsLabelModule,
    RdsButtonModule,
    RdsModalModule,
    RdsOffcanvasModule,
    RdsCompLinkedAccountsModule,
    RdsAvatarModule,
    RdsNavTabModule,
    RdsDropdownlistModule
  ]
})
export class RdsCompProfileModule { }
