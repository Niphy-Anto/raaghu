import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { AuthGuard } from 'projects/libs/shared/src/lib/auth.guard';
import { MfeConfig } from 'projects/mfe-config';
import { HomeComponent } from './home/home.component';
import { MultipleMfeComponent } from './multiple-mfe/multiple-mfe.component';
import { SidenavComponent } from './sidenav/sidenav.component';
export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pages/dashboard',
  },

  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: MfeConfig.login.url,
        exposedModule: './AppModule',
      }).then((m) => m.AppModule),
      data: { animation: 'login' }

  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: MfeConfig.forgotpassword.url,
        exposedModule: './AppModule',
      }).then((m) => m.AppModule),
    data: { animation: 'forgot-password' }
  },


  {
    path: 'pages',
    component: SidenavComponent,
    canActivate:[AuthGuard],
    canActivateChild:[AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.dashboard.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.dashboard.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
          data: { animation: 'dashboard' }
      },
      {
        path: 'language',
       // canActivate:[AuthGuard],
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.language.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'Pages.Administration.Languages', animation:'language' },
      },
      {
        path: 'role',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.role.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'Pages.Administration.Roles', animation:'role' },
      },
      {
        path: 'user',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.user.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'Pages.Administration.Users', animation: 'user'}
      },
      {
        path: 'audit-logs',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.auditlogs.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'Pages.Administration.AuditLogs', animation: 'audit-logs'},
      },
      {
        path: 'visual-settings',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.visualsettings.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { animation:'visual-settings'}
      },
      {
        path: 'organization-unit',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.organizationunit.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'Pages.Administration.OrganizationUnits', animation: 'organization-unit' },
      },
      {
        path: 'dynamic-property-management',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.dynamicpropertymanagement.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'Pages.Administration.DynamicEntityProperties', animation:'dynamic-property-management' },
      },
      {
        path: 'subscription',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.subscription.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
          data: { permission: 'Pages.Administration.Tenant.SubscriptionManagement' },
      },
      {
        path: 'maintenance',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.maintenance.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'Pages.Administration.Host.Maintenance', animation:'maintenance' },
      },
      {
        path: 'webhook-subscription',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.webhooksubscription.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'Pages.Administration.WebhookSubscription', animation:'webhook-subscription' },
      },
      {
        path: 'demo-ui',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.demouicomponents.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'Pages.DemoUiComponents', animation:'demo-ui' },
      },
      {
        path: 'ClaimType',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.Claimtype.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.settings.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'Pages.Administration.Host.Settings', animation:'settings' },
      },
      {
        path: 'setting',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.settings.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
          data: { permission: 'Pages.Administration.Tenant.Settings' },
      },
      {
        path: 'tenant',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.tenant.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'Pages.Tenants', animation: 'tenant' },

      },
      {
        path: 'Security-logs',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.Securitylog.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
      },
      {
        path: 'edition',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.edition.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
        data: { permission: 'Pages.Editions', animation: 'edition'},
      },
      {
        path: 'client',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.client.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
      },
      {
        path: 'IdentityResources',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.identiyresources.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
      },
      {
        path: 'apiresources',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.apiresources.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
      },
      {
        path: 'apiScope',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.apiscope.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
      },
      {
        path: 'text-template',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.texttemplate.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
      },
      {
        path: 'memberactivity',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.memberactivity.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
      },
      {
        path: 'monthlysummary',
        loadChildren: () =>
          loadRemoteModule({
            type: 'module',
            remoteEntry: MfeConfig.monthlysummary.url,
            exposedModule: './AppModule',
          }).then((m) => m.AppModule),
      },
        {
            path: 'LanguageText',
            loadChildren: () =>
                loadRemoteModule({
                    type: 'module',
                    remoteEntry: MfeConfig.languagetext.url,
                    exposedModule: './AppModule',
                }).then((m) => m.AppModule),
          data: { permission: 'Pages.Administration.Languages.ChangeTexts', animation:'LanguageText'},
        },
    ]
  },
  {
    path: 'component-mfe',
    component: MultipleMfeComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'pages/dashboard',
  }
];
