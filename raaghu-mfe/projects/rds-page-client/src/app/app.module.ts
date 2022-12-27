import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionItemComponent, RdsAccordionModule, RdsButtonModule, RdsCheckboxModule, RdsDatepickerModule, RdsIconModule, RdsInputModule, RdsNavTabModule, RdsOffcanvasModule, RdsTextareaModule } from '@libs/rds-elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RdsCompClientResourcesModule } from 'projects/rds-components/src/app/rds-comp-client-resources/rds-comp-client-resources.module';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateStore } from '@ngx-translate/core';
import { RdsCompClientAdvancedModule } from 'projects/rds-components/src/app/rds-comp-client-advanced/rds-comp-client-advanced.module';
import { RdsCompSecretsModule } from 'projects/rds-components/src/app/rds-comp-secrets/rds-comp-secrets.module';
import { RdsCompClientBasicsModule } from 'projects/rds-components/src/app/rds-comp-client-basics/rds-comp-client-basics.module';
import { RdsCompPermissionTreeModule } from 'projects/rds-components/src/app/rds-comp-permission-tree/rds-comp-permission-tree.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    AppRoutingModule,
    RdsOffcanvasModule,
    RdsNavTabModule,
    RdsButtonModule,
    RdsInputModule,
    RdsTextareaModule,  
    RdsCheckboxModule,
    RdsAccordionModule,
    FormsModule,
    SharedModule,
    RdsIconModule,
    RdsDatepickerModule,
    BrowserAnimationsModule,
    RdsCompClientResourcesModule,
    RdsCompClientAdvancedModule,
    RdsCompSecretsModule,
    RdsCompClientBasicsModule,
    RdsCompPermissionTreeModule,
    NgxTranslateModule.forRoot()
  ],
  providers: [
    TranslateService,
    TranslateStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
