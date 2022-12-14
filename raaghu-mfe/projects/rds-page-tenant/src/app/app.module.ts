import { NgModule } from '@angular/core';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateService, TranslateStore } from '@ngx-translate/core';
import { RdsButtonModule } from '@libs/rds-elements';
import { RdsCompTenantListModule } from 'projects/rds-components/src/app/rds-comp-tenant-list/rds-comp-tenant-list.module';
// export const featureReducersMap = {
//   tenants: TenantReducer,
//   tenantInfo: TenantInfoReducer,
//   editionComboboxItem: EditionComboboxReducer,
//   tenantFeature: TenantFeatureReducer,
//   tenantUsers:TenantUsersReducer,
//   tenantLogin:TenantLoginReducer
// };
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    RdsButtonModule,
    NgxTranslateModule.forRoot(),
    RdsCompTenantListModule,
    
  ],
  providers: [
    TranslateService,
    TranslateStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
