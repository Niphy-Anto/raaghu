import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule, TokenAuthServiceProxy, NgxTranslateModule } from '@libs/shared';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginShimmerComponent } from './login-shimmer/login-shimmer.component';
import { RdsCompAlertComponent } from "../../../rds-components/src/app/rds-comp-alert/rds-comp-alert.component";
import { RdsAlertModule } from '@libs/rds-elements';

@NgModule({
    declarations: [
        AppComponent,
        LoginShimmerComponent,
        RdsCompAlertComponent
    ],
    providers: [TokenAuthServiceProxy],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        HttpClientModule,
        NgxTranslateModule.forRoot(),
        NgxShimmerLoadingModule,
        RdsAlertModule
        // StoreModule.forFeature('ValidatetenantState', ValidatetenantMap
        // ),
        // EffectsModule.forRoot([LoginEffects]),
        
        
    ]
})
export class AppModule { }
