import { NgModule } from '@angular/core';
import { NgxTranslateModule, SharedModule } from '@libs/shared';

import { TranslateService, TranslateStore } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RdsCompAuditLogsModule } from "../../../rds-components/src/app/rds-comp-audit-logs/rds-comp-audit-logs.module";
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
        TranslateService,
        TranslateStore
    ],
    bootstrap: [AppComponent],
    imports: [
        AppRoutingModule,
        SharedModule,
        CommonModule,
        NgxTranslateModule.forRoot(),
        RdsCompAuditLogsModule
    ]
})
export class AppModule { }
