/**
 * Compliance.
 *
 * Each compliance level contains the HTML needed to render that level of compliance.
 * The 'cc-compliance' class is used in the CSS to reference the group of buttons.
 */
export interface RdsCompliance {
  [key: string]: string;
}

/**
 * Palette Options
 *
 * Colours can be defined in additional stylesheets or using attributes.
 */

export interface RdsPalette {
  background?: string;
  border?: string;
  link?: string;
  text?: string;
}

/**
 * Layouts
 *
 * Just like the 'compliance' buttons are built using the '{{' and '}}' markers, the main layout can be built too like this too.
 * The word between these two markers tell the tool what each element is called.
 */
export interface RdsLayouts {
  [key: string]: string;
}


/**
 * Interface representing the cookie consent status.
 */
export interface RdsCookieConsentStatus {
  allow?: 'allow';
  deny?: 'deny';
  dismiss?: 'dismiss';
}

