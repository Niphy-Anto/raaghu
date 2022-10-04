//import { AbpHttpInterceptor, RefreshTokenService, AbpHttpConfigurationService } from 'abp-ng2-module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DefaultOAuthInterceptor } from './http.interceptor';
import { OAuthNoopResourceServerErrorHandler } from './resource-server-error-handler';
//import { DefaultOAuthInterceptor } from './http.interceptor';


import * as ApiServiceProxies from './service-proxies';
//import { ZeroRefreshTokenService } from '@account/auth/zero-refresh-token.service';
//import { ZeroTemplateHttpConfigurationService } from './zero-template-http-configuration.service';

@NgModule({
    providers: [
        ApiServiceProxies.AccountAdminServiceProxy,
        ApiServiceProxies.AbpServiceProxy,
        ApiServiceProxies.AccountServiceProxy,
        ApiServiceProxies.LanguagesServiceProxy,
        ApiServiceProxies.IdentityServiceProxy,
        // ApiServiceProxies.InstallServiceProxy,
        // ApiServiceProxies.LanguageServiceProxy,
        // ApiServiceProxies.NotificationServiceProxy,
        ApiServiceProxies.OrganizationUnitsServiceProxy,
        // ApiServiceProxies.PermissionServiceProxy,
        // ApiServiceProxies.ProfileServiceProxy,
        ApiServiceProxies.RolesServiceProxy,
        // ApiServiceProxies.SessionServiceProxy,
        // ApiServiceProxies.TenantServiceProxy,
        // ApiServiceProxies.TenantDashboardServiceProxy,
        // ApiServiceProxies.TenantSettingsServiceProxy,
        // ApiServiceProxies.TimingServiceProxy,
        // ApiServiceProxies.UserServiceProxy,
        // ApiServiceProxies.UserLinkServiceProxy,
        // ApiServiceProxies.UserLoginServiceProxy,
        // ApiServiceProxies.WebLogServiceProxy,
        // ApiServiceProxies.AccountServiceProxy,
        // ApiServiceProxies.TokenAuthServiceProxy,
        // ApiServiceProxies.TenantRegistrationServiceProxy,
        // ApiServiceProxies.HostDashboardServiceProxy,
        // ApiServiceProxies.PaymentServiceProxy,
        // ApiServiceProxies.DemoUiComponentsServiceProxy,
        // ApiServiceProxies.InvoiceServiceProxy,
        // ApiServiceProxies.SubscriptionServiceProxy,
        // ApiServiceProxies.InstallServiceProxy,
        // ApiServiceProxies.UiCustomizationSettingsServiceProxy,
        // ApiServiceProxies.PayPalPaymentServiceProxy,
        // ApiServiceProxies.StripePaymentServiceProxy,
        // ApiServiceProxies.DashboardCustomizationServiceProxy,
        // ApiServiceProxies.WebhookEventServiceProxy,
        // ApiServiceProxies.WebhookSubscriptionServiceProxy,
        // ApiServiceProxies.WebhookSendAttemptServiceProxy,
        // ApiServiceProxies.UserDelegationServiceProxy,
        // ApiServiceProxies.DynamicPropertyServiceProxy,
        // ApiServiceProxies.DynamicEntityPropertyDefinitionServiceProxy,
        // ApiServiceProxies.DynamicEntityPropertyServiceProxy,
        // ApiServiceProxies.DynamicPropertyValueServiceProxy,
        // ApiServiceProxies.DynamicEntityPropertyValueServiceProxy,
        // ApiServiceProxies.TwitterServiceProxy,
        // { provide: RefreshTokenService, useClass: ZeroRefreshTokenService },
        // { provide: AbpHttpConfigurationService, useClass: ZeroTemplateHttpConfigurationService },
        OAuthNoopResourceServerErrorHandler,
       { provide: HTTP_INTERCEPTORS, useClass: DefaultOAuthInterceptor, multi: true },
    ],
})
export class ServiceProxyModule {}
