import { Injectable } from '@angular/core';

import { RdsHTMLElements } from '../model/html-elements';
import { RdsLocationOptions } from '../model/location-options';
import { RdsLawOptions } from '../model/law-options';
import { RdsContentOptions } from '../model/content-options';
import { RdsCookieOptions } from '../model/cookie-options';
import { RdsPaletteOptions } from '../model/palette-options';
import { RdsCompliance, RdsLayouts } from '../model/common-interfaces';
import { RdsCookieType, RdsCookieLayout, RdsCookiePosition, RdsCookieTheme } from '../model/common-types';


/**
 * Cookie Consent configuration object.
 */
@Injectable()
export class RdsCookieConsentConfig {

  
  enabled ?= true;
 
  container?: HTMLElement;

  cookie?: RdsCookieOptions;

  
  content?: RdsContentOptions;

  elements?: RdsHTMLElements;

  
  window?: string;

 
  revokeBtn?: string;

  
  compliance?: RdsCompliance;

  type?: RdsCookieType;

  layouts?: RdsLayouts;

  layout?: RdsCookieLayout;

  
  position?: RdsCookiePosition;

  theme?: RdsCookieTheme;

  static?: boolean;

  palette?: RdsPaletteOptions;

  
  revokable?: boolean;
  
  animateRevokable?: boolean;

  showLink?: boolean;

  dismissOnScroll?: boolean | number;

  dismissOnTimeout?: boolean | number;

  autoOpen?: boolean;

 
  autoAttach?: boolean;

  
  whitelistPage?: (string | RegExp)[] = [];
  /**
   * Simple blacklist for pages. specify page by:
   * - using a string : '/index.html'           (matches '/index.html' exactly) OR
   * - using RegExp   : /\/page_[\d]+\.html/    (matched '/page_1.html' and '/page_2.html' etc)
   *
   */
  blacklistPage?: (string | RegExp)[] = [];

  /**
   * If this is defined, then it is used as the inner html instead of layout. This allows for ultimate customisation.
   * Be sure to use the classes `cc-btn` and `cc-allow`, `cc-deny` or `cc-dismiss`. They enable the app to register click
   * handlers. You can use other pre-existing classes too. See `src/styles` folder.
   *
   */
  overrideHTML?: string;

  /**
   * Law Options
   */
  law?: RdsLawOptions;

  /**
   * Location Options
   */
  location?: boolean | RdsLocationOptions;

  /**
   * Set value as click anything on the page, excluding the `ignoreClicksFrom` below (if we click on the revoke button etc)
   */
  dismissOnWindowClick?: boolean;

  /**
   * If `dismissOnWindowClick` is true, we can click on 'revoke' and we'll still dismiss the banner, so we need exceptions.
   * Should be an array of class names (not CSS selectors).
   */
  ignoreClicksFrom?: string[];

  // these callback hooks are called at certain points in the program execution
  
  /**
   * This is called when the popup is opened. It can be used to trigger an animation, or to attach extra handlers, etc.
   */
  onPopupOpen?: () => void;

  /**
   * This is called when the popup is closed. It can be used to clean up commands from onPopupOpen.
   */
  onPopupClose?: () => void;

  /**
   * This is called on start up, with the current chosen compliance. It can be used to tell you if the user has already consented or not as soon as you initialise the tool.
   */
  onInitialise?: (status: 'allow' | 'deny' | 'dismiss') => void;

  /**
   * This is called any time the status is changed. This can be used to react to changes that are made to the compliance level. You can use the popup instance functions from within these callbacks too. I.E. `this.hasAnswered()` and `this.hasConsented()`.
   */
  onStatusChange?: (status: 'allow' | 'deny' | 'dismiss', chosenBefore: boolean) => void;

  /**
   * This is called when the user clicks the `revoke` button. This means that their current choice has been invalidated.
   */
  onRevokeChoice?: () => void;
  
  onNoCookieLaw?: (countryCode: string, country: string) => void;

} 