import { NgModule } from '@angular/core';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsButtonModule, RdsIconModule, RdsNavTabModule, RdsOffcanvasModule } from '@libs/rds-elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //BrowserModule,
    AppRoutingModule,
    SharedModule,
    RdsNavTabModule,
    RdsButtonModule,
    RdsOffcanvasModule,
    HttpClientModule,
    NgxTranslateModule.forRoot(),
    RdsIconModule

  ],
  providers: [ArrayToTreeConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
