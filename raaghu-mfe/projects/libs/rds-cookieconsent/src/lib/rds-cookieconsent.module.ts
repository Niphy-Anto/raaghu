import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule} from '@angular/core';

import { WindowService, RdsCookieConsentConfig, RdsCookieConsentService } from './service/public-api';

@NgModule({
  imports: [
    CommonModule,
    
  ]
})
export class RdsCookieConsentModule {

  static forRoot(config: RdsCookieConsentConfig): ModuleWithProviders<RdsCookieConsentModule> {
    return {
      ngModule: RdsCookieConsentModule,
      
      providers: [WindowService, { provide: RdsCookieConsentConfig, useValue: config }, RdsCookieConsentService]
    };
  }
}
