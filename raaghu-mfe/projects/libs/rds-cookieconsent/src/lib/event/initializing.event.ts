/**
 * Event fired when Cookie Consent initializes.
 */
export interface RdsInitializingEvent {
  /**
   * The status of cookie consent
   */
  status: 'allow' | 'deny' | 'dismiss';
}
