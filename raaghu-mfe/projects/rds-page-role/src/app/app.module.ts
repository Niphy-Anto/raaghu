import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RdsButtonModule, RdsCheckboxModule, RdsInputModule, RdsNavTabModule, RdsOffcanvasModule, RdsSearchInputModule } from '@libs/rds-elements';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// export const RolsReducersMap = {
//   PermissionI: PermissionReducer,
//   EditRoleSateI: GetRoleforEdit,
//   roles: RoleReducer,
// };
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    RdsButtonModule,
    RdsOffcanvasModule,
    RdsNavTabModule,
    RdsInputModule,
    RdsCheckboxModule,
    RdsSearchInputModule,
    NgxTranslateModule.forRoot(),
    // StoreModule.forFeature('roles', RolsReducersMap
    // ),
    // EffectsModule.forRoot([RoleEffects]),
  ],

  providers: [ArrayToTreeConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
