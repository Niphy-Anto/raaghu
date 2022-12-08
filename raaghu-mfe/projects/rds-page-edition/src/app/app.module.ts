import { NgModule } from '@angular/core';
import { NgxTranslateModule } from '@libs/shared';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';
import { RdsCompFeaturesModule } from 'projects/rds-components/src/app/rds-comp-features/rds-comp-features.module';
import { SharedModule } from '../../../libs/shared/src/lib/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    NgxTranslateModule.forRoot(),
    RdsCompFeaturesModule
  ],
  providers: [ArrayToTreeConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
