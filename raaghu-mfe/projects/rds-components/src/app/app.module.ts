import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RdsLoginComponent } from './rds-comp-login/rds-comp-login.component';
import { RdsAddressInputComponent } from './rds-comp-address-input/rds-comp-address-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedModule, NgxTranslateModule, HttpLoaderFactory } from '@libs/shared';
import { RdsDataTableComponent } from './rds-comp-data-table/rds-comp-data-table.component';
import { RdsTopNavigationComponent } from './rds-comp-top-navigation/rds-comp-top-navigation.component';
import { RdsAdminDashboardComponent } from './rds-comp-admin-dashboard/rds-comp-admin-dashboard.component';
import { RdsForgotPasswordComponent } from './rds-comp-forgot-password/rds-comp-forgot-password.component';
import { RdsNotificationComponent } from './rds-comp-notification/rds-comp-notification.component';

import { CommonModule } from '@angular/common';
import { RdsCompProfileComponent } from './rds-comp-profile/rds-comp-profile.component';
import { RdsOrganizationTreeComponent } from './rds-comp-organization-tree/rds-comp-organization-tree.component';
import { RdsCompEditionComponent } from './rds-comp-edition/rds-comp-edition.component';
import { NestGroupDirective } from './rds-comp-hierarchy/node-label.directive';
import { RdsCompHierarchyComponent } from './rds-comp-hierarchy/rds-comp-hierarchy.component';
import { RdsCompLoginAttemptsComponent } from './rds-comp-login-attempts/rds-comp-login-attempts.component';
import { RdsCompSubscriptionComponent } from './rds-comp-subscription/rds-comp-subscription.component';
import { RdsUserDelegationsComponent } from './rds-comp-user-delegations/rds-comp-user-delegations.component';
import { RdsMysettingsComponent } from './rds-comp-mysettings/rds-comp-mysettings.component';
import { RdsCompDownloadCollectionComponent } from './rds-comp-download-collection/rds-comp-download-collection.component';
import { RdsCompAlertPopupComponent } from './rds-comp-alert-popup/rds-comp-alert-popup.component';
import { RdsLinkedAccountsComponent } from './rds-comp-linked-accounts/rds-comp-linked-accounts.component';
import { RdsCompAuditLogsComponent } from './rds-comp-audit-logs/rds-comp-audit-logs.component';
import { RdsCompTenantListComponent } from './rds-comp-tenant-list/rds-comp-tenant-list.component';
import { RdsCompTenantInformationComponent } from './rds-comp-tenant-information/rds-comp-tenant-information.component';
import { RdsCompTenantSettingsComponent } from './rds-comp-tenant-settings/rds-comp-tenant-settings.component';
import { RdsCompUserTableComponent } from './rds-comp-user-table/rds-comp-user-table.component';
import { RdsCompEditionTableComponent } from './rds-comp-edition-table/rds-comp-edition-table.component';
import { OrganizationTreeDirective } from './rds-comp-organization-tree/organizationTreeNodeModel.directive';
import {
  RdsButtonModule, RdsSearchInputModule, RdsSelectListModule, RdsInputModule, RdsPaginationModule, RdsCheckboxModule, RdsAvatarModule, RdsDropdownModule, RdsModalModule,
  RdsNavTabModule, RdsCardModule, RdsChartPieModule, RdsChartBarHorizontalModule, RdsChartBoolModule, RdsBadgeModule, RdsWidgetModule, RdsCheckboxGroupsModule, RdsCheckboxParentChildModule, 
  RdsSideNavModule, RdsDatepickerModule, RdsBannerModule, RdsFileUploaderModule, RdsTextEditorModule, RdsOffcanvasModule, RdsTextareaModule, RdsRadioButtonModule,
  RdsColorPickerModule, RdsChartRadarModule, RdsChartLineModule, RdsBigNumberWidgetModule, RdsIconModule, RdsTableModule, RdsChartAreaModule, RdsDropdownlistModule, 
  RdsInputGroupModule, RdsAccordionModule, RdsTagsModule, RdsAlertModule, RdsButtonGroupModule, RdsCollapseModule, RdsIllustrationModule, RdsListGroupModule, RdsPopoverModule, 
  RdsSpinnerModule, RdsToastsModule, RdsChartBubbleModule, RdsChartDoughnutModule, RdsChartMixedModule, RdsChartPolarAreaModule, RdsChartScatterModule, RdsChartStackedModule, 
  RdsProgressbarModule, RdsBreadcrumbModule, RdsCarouselModule, RdsDoubleRangeModule, RdsScrollspyModule, RdsCounterModule, RdsFabMenuModule, RdsLabelModule
} from '@libs/rds-elements';
import { RdsCompDemouiComponent } from './rds-comp-demoui/rds-comp-demoui.component';
import { RdsCompTenantManagementComponent } from './rds-comp-tenant-management/rds-comp-tenant-management.component';
import { RdsCompUserManagementComponent } from './rds-comp-user-management/rds-comp-user-management.component';
import { RdsCompOtherSettingsComponent } from './rds-comp-other-settings/rds-comp-other-settings.component';
import { RdsCompInvoiceComponent } from './rds-comp-invoice/rds-comp-invoice.component';
import { RdsCompEmailComponent } from './rds-comp-email/rds-comp-email.component';
import { RdsSecurityComponent } from './rds-comp-security/rds-comp-security.component';
import { RdsCompFeaturesComponent } from './rds-comp-features/rds-comp-features.component';
import { RdsCompApiScopeComponent } from './rds-comp-api-scope/rds-comp-api-scope.component';
import { RdsCompMemberActivityComponent } from './rds-comp-member-activity/rds-comp-member-activity.component';
import { RdsCompNewClaimTypeComponent } from './rds-comp-new-claim-type/rds-comp-new-claim-type.component';
import { RdsCompBasicResourceComponent } from './rds-comp-basic-resource/rds-comp-basic-resource.component';
import { RdsCompWebhookSubscriptionComponent } from './rds-comp-webhook-subscription/rds-comp-webhook-subscription.component';
import { RdsCompEditLanguageTextComponent } from './rds-comp-edit-language-text/rds-comp-edit-language-text.component';
import { RdsCompNewLanguageComponent } from './rds-comp-new-language/rds-comp-new-language.component';
import { RdsCompClaimsComponent } from './rds-comp-claims/rds-comp-claims.component';
import { RdsCompPropertiesComponent } from './rds-comp-properties/rds-comp-properties.component';
import { RdsCompCacheComponent } from './rds-comp-cache/rds-comp-cache.component';
import { RdsCompWebsiteLogComponent } from './rds-comp-website-log/rds-comp-website-log.component';
import { RdsCompSecretsComponent } from './rds-comp-secrets/rds-comp-secrets.component';
import { RdsCompClientBasicsComponent } from './rds-comp-client-basics/rds-comp-client-basics.component';
import { RdsCompClientResourcesComponent } from './rds-comp-client-resources/rds-comp-client-resources.component';
import { RdsCompUserBasicsComponent } from './rds-comp-user-basics/rds-comp-user-basics.component';
import { RdsCompUserPermissionsComponent } from './rds-comp-user-permissions/rds-comp-user-permissions.component';
import { RdsCompsUserClaimsComponent } from './rds-comps-user-claims/rds-comps-user-claims.component';
import { RdsCompVisualSettingsComponent } from './rds-comp-visual-settings/rds-comp-visual-settings.component';
import { RdcCompApiScopeBasicsComponent } from './rdc-comp-api-scope-basics/rdc-comp-api-scope-basics.component';
import { RdcCompApiScopeResourcesComponent } from './rdc-comp-api-scope-resources/rdc-comp-api-scope-resources.component';
import { RdsCompNewRoleComponent } from './rds-comp-new-role/rds-comp-new-role.component';
import { RdsCompPermissionTreeComponent } from './rds-comp-permission-tree/rds-comp-permission-tree.component';
import { RdsCompTenantDashboardComponent } from './rds-comp-tenant-dashboard/rds-comp-tenant-dashboard.component';
import { RdsCompAlertComponent } from './rds-comp-alert/rds-comp-alert.component';
import { RdsCompRoleListComponent } from './rds-comp-role-list/rds-comp-role-list.component';
import { RdsCompDynamicPropertiesComponent } from './rds-comp-dynamic-properties/rds-comp-dynamic-properties.component';
import { RdsCompInformationComponent } from './rds-comp-information/rds-comp-information.component';
import { RdsCompDynamicEnityPropertiesComponent } from './rds-comp-dynamic-enity-properties/rds-comp-dynamic-enity-properties.component';
import { RdsCompNewDynamicEntityPropertyComponent } from './rds-comp-new-dynamic-entity-property/rds-comp-new-dynamic-entity-property.component';
import { RdsCompPlanInformationComponent } from './rds-comp-plan-information/rds-comp-plan-information.component';
import { RdsCompVisualSettingsShimmerComponent } from './rds-comp-visual-settings/rds-comp-visual-settings-shimmer/rds-comp-visual-settings-shimmer.component';
import { NgxShimmerLoadingModule } from  'ngx-shimmer-loading';
import { RdsCompFeaturesEditShimmerComponent } from './rds-comp-features/rds-comp-features-edit-shimmer/rds-comp-features-edit-shimmer.component';
import { RdsCompNewRoleShimmerComponent } from './rds-comp-new-role/rds-comp-new-role-shimmer/rds-comp-new-role-shimmer.component';
import { RdsCompUserBasicsShimmerComponent } from './rds-comp-user-basics/rds-comp-user-basics-shimmer/rds-comp-user-basics-shimmer.component';
import { RdsCompsUserClaimsShimmerComponent } from './rds-comps-user-claims/rds-comps-user-claims-shimmer/rds-comps-user-claims-shimmer.component';
import { RdsCompUserManagementShimmerComponent } from './rds-comp-user-management/rds-comp-user-management-shimmer/rds-comp-user-management-shimmer.component';
import { RdsCompUserDelegationsShimmerComponent } from './rds-comp-user-delegations/rds-comp-user-delegations-shimmer/rds-comp-user-delegations-shimmer.component';
import { RdsCompTopNavigationShimmerComponent } from './rds-comp-top-navigation/rds-comp-top-navigation-shimmer/rds-comp-top-navigation-shimmer.component';
import { RdsCompTenantSettingsShimmerComponent } from './rds-comp-tenant-settings/rds-comp-tenant-settings-shimmer/rds-comp-tenant-settings-shimmer.component';
import { RdsCompTenantManagementShimmerComponent } from './rds-comp-tenant-management/rds-comp-tenant-management-shimmer/rds-comp-tenant-management-shimmer.component';
import { RdsCompTenantInformationShimmerComponent } from './rds-comp-tenant-information/rds-comp-tenant-information-shimmer/rds-comp-tenant-information-shimmer.component';
import { RdsCompSubscriptionShimmerComponent } from './rds-comp-subscription/rds-comp-subscription-shimmer/rds-comp-subscription-shimmer.component';
import { RdsCompSecurityShimmerComponent } from './rds-comp-security/rds-comp-security-shimmer/rds-comp-security-shimmer.component';
import { RdsCompOrganizationTreeShimmerComponent } from './rds-comp-organization-tree/rds-comp-organization-tree-shimmer/rds-comp-organization-tree-shimmer.component';
import { RdsCompPropertiesShimmerComponent } from './rds-comp-properties/rds-comp-properties-shimmer/rds-comp-properties-shimmer.component';
import { RdsCompTableShimmerComponent } from './rds-comp-data-table/rds-comp-table-shimmer/rds-comp-table-shimmer.component';
import { RdsCompPageNotFoundComponent } from './rds-comp-page-not-found/rds-comp-page-not-found.component';
import { RdsCompMarketingWebsiteNewsletterComponent } from './rds-comp-marketing-website-newsletter/rds-comp-marketing-website-newsletter.component';
import { RdsCompFaqComponent } from './rds-comp-faq/rds-comp-faq.component';



@NgModule({
  declarations: [

    AppComponent,
    RdsLoginComponent,
    RdsAddressInputComponent,
    RdsDataTableComponent,
    RdsTopNavigationComponent,
    RdsAdminDashboardComponent,
    RdsCompProfileComponent,
    RdsForgotPasswordComponent,
    RdsNotificationComponent,
    RdsSecurityComponent,
    RdsUserDelegationsComponent,
    RdsMysettingsComponent,
    RdsCompLoginAttemptsComponent,
    RdsCompEditionComponent,
    NestGroupDirective,
    RdsCompSubscriptionComponent,
    RdsCompHierarchyComponent,
    RdsCompDownloadCollectionComponent,
    RdsCompAlertPopupComponent,
    RdsLinkedAccountsComponent,
    RdsCompAuditLogsComponent,
    RdsCompTenantListComponent,
    RdsCompTenantInformationComponent,
    RdsCompTenantSettingsComponent,
    RdsOrganizationTreeComponent,
    OrganizationTreeDirective,
    RdsCompTenantManagementComponent,
    RdsCompUserManagementComponent,
    RdsCompEmailComponent,
    RdsCompInvoiceComponent,
    RdsCompOtherSettingsComponent,
    RdsCompDemouiComponent,
    RdsCompUserTableComponent,
    RdsCompEditionTableComponent,
    RdsCompFeaturesComponent,
    RdsCompApiScopeComponent,
    RdsCompMemberActivityComponent,
    RdsCompNewClaimTypeComponent,
    RdsCompBasicResourceComponent,
    RdsCompWebhookSubscriptionComponent,
    RdsCompEditLanguageTextComponent,
    RdsCompNewLanguageComponent,
    RdsCompClaimsComponent,
    RdsCompPropertiesComponent,
    RdsCompCacheComponent,
    RdsCompWebsiteLogComponent,
    RdsCompSecretsComponent,
    RdsCompClientBasicsComponent,
    RdsCompClientResourcesComponent,
    RdsCompUserBasicsComponent,
    RdsCompUserPermissionsComponent,
    RdsCompsUserClaimsComponent,
    RdsCompVisualSettingsComponent,
    RdsCompNewRoleComponent,
    RdcCompApiScopeBasicsComponent,
    RdcCompApiScopeResourcesComponent,
    RdsCompPermissionTreeComponent,
    RdsCompTenantDashboardComponent,
    RdsCompAlertComponent,
    RdsCompRoleListComponent,
    RdsCompDynamicPropertiesComponent,
    RdsCompInformationComponent,
    RdsCompDynamicEnityPropertiesComponent,
    RdsCompNewDynamicEntityPropertyComponent,
    RdsCompPlanInformationComponent,
    RdsCompVisualSettingsShimmerComponent,
    RdsCompFeaturesEditShimmerComponent,
    RdsCompNewRoleShimmerComponent,
    RdsCompUserBasicsShimmerComponent,
    RdsCompsUserClaimsShimmerComponent,
    RdsCompUserManagementShimmerComponent,
    RdsCompUserDelegationsShimmerComponent,
    RdsCompTopNavigationShimmerComponent,
    RdsCompTenantSettingsShimmerComponent,
    RdsCompTenantManagementShimmerComponent,
    RdsCompTenantInformationShimmerComponent,
    RdsCompSubscriptionShimmerComponent,
    RdsCompSecurityShimmerComponent,
    RdsCompOrganizationTreeShimmerComponent,
    RdsCompPropertiesShimmerComponent,
    RdsCompTableShimmerComponent,
    RdsCompPageNotFoundComponent,
    RdsCompMarketingWebsiteNewsletterComponent,
    RdsCompFaqComponent,
    //RdsCompLanguageTextListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    NgxTranslateModule.forRoot(),
    RdsButtonModule,
    RdsInputModule,
    RdsPaginationModule,
    RdsCheckboxModule,
    RdsRadioButtonModule,
    RdsAvatarModule,
    RdsDropdownModule,
    RdsModalModule,
    RdsNavTabModule,
    RdsDropdownlistModule,
    RdsInputGroupModule,
    RdsCardModule,
    RdsChartPieModule,
    RdsChartBarHorizontalModule,
    RdsChartBoolModule,
    RdsBadgeModule,
    RdsSideNavModule,
    RdsDatepickerModule,
    RdsOffcanvasModule,
    RdsSelectListModule,
    RdsSearchInputModule,
    RdsBannerModule,
    RdsFileUploaderModule,
    RdsTextareaModule,
    RdsChartRadarModule,
    RdsBigNumberWidgetModule,
    RdsTableModule,
    RdsChartAreaModule,
    RdsAccordionModule,
    RdsTagsModule,
    RdsAlertModule,
    RdsButtonGroupModule,
    RdsCheckboxGroupsModule,
    RdsCheckboxParentChildModule,
    RdsCollapseModule,
    RdsIllustrationModule,
    RdsListGroupModule,
    RdsPopoverModule,
    RdsSpinnerModule,
    RdsToastsModule,
    RdsWidgetModule,
    RdsChartBubbleModule,
    RdsChartDoughnutModule,
    RdsChartLineModule,
    RdsChartMixedModule,
    RdsChartPolarAreaModule,
    RdsChartScatterModule,
    RdsChartStackedModule,
    RdsProgressbarModule,
    RdsBreadcrumbModule,
    RdsCarouselModule,
    RdsColorPickerModule,
    RdsDoubleRangeModule,
    RdsIconModule,
    RdsScrollspyModule,
    RdsCounterModule,
    RdsTextEditorModule,
    RdsFabMenuModule,
    RdsLabelModule,
    NgxShimmerLoadingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
