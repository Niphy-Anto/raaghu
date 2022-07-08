export interface Profile {
    name: string;
    surname: string;
    userName: string;
    emailAddress: string;
    phoneNumber: string;
    isPhoneNumberConfirmed: boolean;
    timezone: string;
    qrCodeSetupImageUrl: string;
    isGoogleAuthenticatorEnabled: boolean
}


export interface PasswordInfo {
    currentPassword: string;
    newPassword: string;}


