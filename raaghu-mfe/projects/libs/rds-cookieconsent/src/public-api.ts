export * from './lib/rds-cookieconsent.module';

export {
    WindowService, RdsCookieConsentConfig, RdsCookieConsentService,
    RdsHasCookieConsent, RdsCookieConsent
} from './lib/service/public-api';

export {
    RdsContentOptions, RdsHTMLElements, RdsLawOptions, RdsLocationOptions, RdsPaletteOptions,
    RdsCompliance, RdsLayouts, RdsPalette, RdsCookieConsentStatus,
    RdsCookiePosition, RdsCookieLayout, RdsCookieType, RdsCookieTheme, RdsCookieCompliance, RdsCookieOptions
} from './lib/model/public-api';

export { RdsInitializingEvent, RdsInitializationErrorEvent, RdsStatusChangeEvent, RdsNoCookieLawEvent } from './lib/event/public-api';
