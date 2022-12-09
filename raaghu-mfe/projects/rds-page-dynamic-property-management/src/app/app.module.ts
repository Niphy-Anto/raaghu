import { NgModule } from '@angular/core';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsButtonModule, RdsDropdownlistModule, RdsDropdownModule, RdsInputModule, RdsNavTabModule, RdsOffcanvasModule, RdsSelectListModule } from '@libs/rds-elements';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';
import { RdsFabMenuModule } from 'projects/libs/rds-elements/src/rds-fab-menu/src/public-api';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DynamicEntityEffects, DynamicEntityReducer, DynamicPermissionReducer, DynamicPropertyEffects, DynamicPropertyReducer, GetAllDynamicPropertyReducer, getDynamicPropertyByEditReducer, GetInputnameReducer } from '@libs/state-management';
import { CommonModule } from '@angular/common';
import { RdsCompDynamicPropertiesModule } from 'projects/rds-components/src/app/rds-comp-dynamic-properties/rds-comp-dynamic-properties.module';
export const featureReducersMap = {
  properties: DynamicPropertyReducer,
  InputTypeNames: GetInputnameReducer,
  EditDynamicPropertSateI: getDynamicPropertyByEditReducer,
  DynanmicPermission: DynamicPermissionReducer,
  dynamicEntity: DynamicEntityReducer,
  Entities: GetAllDynamicPropertyReducer
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //BrowserModule,
    CommonModule,
    AppRoutingModule,
    SharedModule,
    RdsDropdownModule,
    RdsButtonModule,
    RdsInputModule,
    RdsFabMenuModule,
    RdsNavTabModule,
    RdsDropdownlistModule,
    RdsSelectListModule,
    FormsModule,
    ReactiveFormsModule,
    RdsOffcanvasModule,
    NgxTranslateModule.forRoot(),
    StoreModule.forFeature('property', featureReducersMap),
    EffectsModule.forRoot([DynamicPropertyEffects, DynamicEntityEffects,
    ]),
    RdsCompDynamicPropertiesModule
  ],
  providers: [ArrayToTreeConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
