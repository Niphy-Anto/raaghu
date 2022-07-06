import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService, TranslateStore } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http,
        './assets/i18n/',
        '.json');
}

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
    declarations: [],
    providers: [
        TranslateService,
        TranslateStore
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        TranslateModule.forChild({
            defaultLanguage: 'en-GB',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [
                    HttpClient
                ],
            },
            isolate: false
        })
    ],
    exports: [
        TranslateModule
    ]
})

export class NgxTranslateModule {
    static forRoot(): ModuleWithProviders<any> {
        return {
            ngModule: NgxTranslateModule,
            providers: [
                TranslateService,
                TranslateStore
            ]
        }
    }
}
