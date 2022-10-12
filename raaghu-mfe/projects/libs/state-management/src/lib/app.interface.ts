// import { DelegationsState, UserNameFilterState } from './state/authority-delegations/authority-delegations.reducer';
// import { EditionInfoState, EditionsState, TenantCountState } from './state/edition/edition.reducer';
// import { CountryState, DefaultLanguageState, LanguagesState } from './state/language/language.reducer';
// import { maintenanceState, Websitelogstate } from './state/maintenance/maintenance.reducer';
// import { profileState } from './state/mysettings/mysettings.reducer';
// import { LoginAttemptsState } from './state/login-attempts/login-attempts.reducer';
// import { ManageLinkedAccountsState } from './state/manage-linked-accounts/manage-linked-accounts.reducer';
// import { ProductState } from './state/products/product.reducer';
// import { RolesState, PermissionState, EditRoleSate } from './state/role/role.reducer';
// import { SubscriptionInformationState, SubscriptionState } from './state/subscription/subscription.reducer';
// import { VisualsettingsState } from './state/Visual-settings/visual-settings.reducer';
// import { WebhookSubscriptionState } from './state/webhook-subscription/webhook-subscription.reducer';
// import { EditionsComboboxState, TenantFeatureState, TenantInfoState, TenantState } from './state/tenant/tenant.reducer';
// import { AuditLogsState } from './state/audit-logs/audit-logs.reducer';
// import { AllDynamicEntitySate, AllDynamicPropertyEntitySate, DynamicEntityState, DynamicPermissionState, DynamicPropertyState, EditDynampicPropertState, InputPropertynameState } from './state/dynamic-property-management/dynamic-property.reducer';
 import { OrganizationUnitState } from './state/organization-unit/organization-unit.reducer';
// import { EditUserPermissionSate, EditUserSate, UserPermissionFilterState, UsersState } from './state/user/user.reducer';
// //import { SettingsState, ValidateTenantState } from '../public-api';
// import { MLAState } from './state/mla/mla.reducer';
import { LanguageTextsState } from './state/language-text/language-text.reducer';
// import { SettingsState, SettingsTenantPageComboboxState } from './state/settings/settings.reducer';
// import { ValidateTenantState } from './state/login/login.reducer';
import { downloadState } from './state/DownloadData/download-data.reducer';

import { ValidateTenantState } from "./state/login/login.reducer";
import { LanguagesState } from './state/language/language.reducer';
import { EditionsState } from './state/edition/edition.reducer';
import { EditionsComboboxState, TenantFeatureState, TenantInfoState, TenantState } from './state/tenant/tenant.reducer';
import { RolesState } from './state/role/role.reducer';
import { UsersState } from './state/user/user.reducer';
import { AuditLogsState } from './state/audit-logs/audit-logs.reducer';
import { IdentityResourcesState } from './state/identity-resources/identity-resources.reducer';
import { ClientState } from './state/clients/clients.reducer';
import { ClaimTypesState } from './state/claim-types/claim-types.reducer';
import { ApiResourcesState } from './state/api-resources copy/api-resources.reducer';

export interface AppState {

  user:UsersState,
  // products: ProductState,
  // webhookSubscriptions: WebhookSubscriptionState,
  // profile: profileState,
  // dynamicProperty: DynamicPropertyState,
  organizationUnit: OrganizationUnitState,
  // dynamicEntity: DynamicEntityState,
  editions: EditionsState,
  roles: RolesState,
  languages: LanguagesState,
  // Subscription: SubscriptionState,
  // SubscriptionInformation: SubscriptionInformationState,
  // visualsettings: VisualsettingsState,
  // maintenances: maintenanceState,
  // Websitelogs: Websitelogstate,
  // WebhookSubscription: WebhookSubscriptionState,
  // ManageLinkedAccounts: ManageLinkedAccountsState,
  // loginAttempts: LoginAttemptsState,
  // settings: SettingsState,
  tenants: TenantState,
   auditLogs: AuditLogsState,
  // changeLogs:AuditLogsState
  // UserPermissionFilterI:UserPermissionFilterState
  // countries: CountryState,
  // Delegation: DelegationsState,
  // mla: MLAState,
  // Entities: AllDynamicEntitySate,
  // PropertiesEntitie: AllDynamicPropertyEntitySate
  editionComboboxItem: EditionsComboboxState,
  tenantInfo: TenantInfoState,
  tenantFeature: TenantFeatureState,
  validateTenant: ValidateTenantState,
  identityResources: IdentityResourcesState,
  apiResources: ApiResourcesState,
  // InputTypeNames: InputPropertynameState
  // EditDynamicPropertSateI: EditDynampicPropertState,
  // DynanmicPermission: DynamicPermissionState,
  //  usernames: UserNameFilterState,
   languageText: LanguageTextsState,
   clients: ClientState,
  // defaultLanguage: DefaultLanguageState,
  // settingsComboboxItem: SettingsTenantPageComboboxState,
  download:downloadState,
  claimTypes: ClaimTypesState
  // editdynamicProperty:EditDynampicPropertState
}

export const products = 'products';
export const roles = 'roles';
export const Validatetenant = 'ValidatetenantState';
export const users = 'users';
export const maintenances = 'maintenances';
export const visualsettings = 'visualsettings';
export const Subscription = 'Subscription';
export const auditLogs = 'auditLogs';
export const languageText = 'languageText';
export const download = 'download';



