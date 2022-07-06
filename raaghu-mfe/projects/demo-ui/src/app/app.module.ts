import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoUiComponent } from './demo-ui/demo-ui.component';

import { NgxTranslateModule, SharedModule } from '@libs/shared';

@NgModule({
  declarations: [
    AppComponent,
    DemoUiComponent
  ],
  imports: [    
    AppRoutingModule,
    SharedModule,
    NgxTranslateModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
