import { NgModule } from '@angular/core';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  RdsButtonModule,RdsInputModule, RdsPaginationModule, RdsCheckboxModule, RdsAvatarModule, RdsDropdownModule, RdsModalModule,
  RdsNavTabModule, RdsCardModule, RdsBadgeModule,
RdsOffcanvasModule
} from '@libs/rds-elements';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RdsCompBasicResourcesModule } from 'projects/rds-components/src/app/rds-comp-basic-resource/rds-comp-basic-resources.module';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateStore } from '@ngx-translate/core';
import { RdsCompClientResourcesModule } from 'projects/rds-components/src/app/rds-comp-client-resources/rds-comp-client-resources.module';
import { RdsCompPropertiesModule } from 'projects/rds-components/src/app/rds-comp-properties/rds-comp-properties.module';

@NgModule({
  declarations: [
    AppComponent,
    // BasicresourceComponent,
    // ClaimsComponent,
    // PropertiesComponent,
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    AppRoutingModule,
    SharedModule,
    RdsButtonModule,
    RdsInputModule,
    RdsCheckboxModule,
    RdsDropdownModule,
    RdsModalModule,
    RdsNavTabModule,
    RdsCardModule,
    RdsBadgeModule,
    RdsOffcanvasModule,
    FormsModule,
    ReactiveFormsModule,
    RdsCompClientResourcesModule,
    RdsCompBasicResourcesModule,
    RdsCompPropertiesModule,
    NgxTranslateModule.forRoot(),
    
  ],
  providers: [
    TranslateService,
    TranslateStore

],
  bootstrap: [AppComponent]
})
export class AppModule { }
