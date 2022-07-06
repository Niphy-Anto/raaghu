import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule, TokenAuthServiceProxy, NgxTranslateModule } from '@libs/shared';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    NgxTranslateModule.forRoot()
    // StoreModule.forFeature('ValidatetenantState', ValidatetenantMap
    // ),
    // EffectsModule.forRoot([LoginEffects]),
  ],
  providers: [TokenAuthServiceProxy],
  bootstrap: [AppComponent]
})
export class AppModule { }
