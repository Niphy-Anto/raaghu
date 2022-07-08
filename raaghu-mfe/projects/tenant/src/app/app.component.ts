import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { ArrayToTreeConverterService, ComponentLoaderOptions } from '@libs/shared';
import { deleteTenant, getEditionComboboxItems, getTenantFeaturesForEdit, getTenantForEdit, getTenants, saveTenant, selectAllTenants, selectDefaultLanguage, selectEditionComboboxItems, selectTenantFeature, selectTenantInfo, updateTenant, updateTenantFeatureValues } from '@libs/state-management';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'tenant';
  tenantSettingsInfo: any = {};
  tenantData: any = {};
  
  rdsTenantMfeConfig: ComponentLoaderOptions = {
    name: 'RdsCompTenantList'
  };
  editionList: any = [];
  tenantFeatures: any = [];
  tenantFeatureValues: any = [];
  tenantTableHeader: TableHeader[] = [
    { displayName: 'Tenant', key: 'tenantInfoTemplate', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true },  
    { displayName: 'Edition', key: 'editionTemplate', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true },
    { displayName: 'Status', key: 'statusTemplate', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true },
   
  ]

  tenantTableData: any = []
  constructor(private store: Store, private translate: TranslateService, private _arrayToTreeConverterService: ArrayToTreeConverterService) { }
  ngOnInit(): void {
    this.store.select(selectDefaultLanguage).subscribe((res: any) => {
      if (res) {
        this.translate.use(res);
      }
    });
    this.rdsTenantMfeConfig = {
      name: 'RdsCompTenantList',
      input: {
        tenantHeaders: this.tenantTableHeader,
        tenantList: this.tenantTableData,
        editionList: this.editionList,
        noDataTitle: 'Currently you do not have tenant'
      },
      output: {
        onSaveTenant: (tenant: any) => {
          if (tenant && tenant.tenantInfo) {
            if (tenant.tenantInfo.id) {
              const data: any = {
                tenancyName: tenant.tenantInfo.tenancyName,
                name: tenant.tenantInfo.tenantName,
                connectionString: tenant.tenantSettings.connectionString,
                editionId: +tenant.tenantInfo.edition,
                isActive: tenant.tenantSettings.isActive,
                subscriptionEndDateUtc: new Date(tenant.tenantInfo.subscriptionEndDate).toISOString(),
                isInTrialPeriod: false,
                id: tenant.tenantInfo.id
              };
              this.store.dispatch(updateTenant(data))

            } else {
              const data: any = {
                tenancyName: tenant.tenantInfo.tenancyName,
                name: tenant.tenantInfo.tenantName,
                adminEmailAddress: tenant.tenantInfo.adminEmailAddress,
                adminPassword: tenant.tenantSettings.password,
                connectionString: tenant.tenantSettings.connectionString,
                shouldChangePasswordOnNextLogin: tenant.tenantSettings.changePasswordOnNextLogin,
                sendActivationEmail: tenant.tenantSettings.sendActivationEmail,
                editionId: +tenant.tenantInfo.edition,
                isActive: tenant.tenantInfo.isActive,
                subscriptionEndDateUtc: new Date(tenant.tenantInfo.subscriptionEndDate).toISOString(),
                isInTrialPeriod: false
              };
              this.store.dispatch(saveTenant(data))

            }

          }

        },
        onEditTenant: (selectedTenant: any) => {
          this.store.dispatch(getTenantForEdit(selectedTenant));
          this.store.dispatch(getTenantFeaturesForEdit(selectedTenant))
        },
        onReset: (event: any) => {
          this.tenantData = undefined;
          this.tenantSettingsInfo = undefined;
          this.tenantFeatureValues = [];
          this.tenantFeatures = [];
          const mfeConfig = this.rdsTenantMfeConfig
          mfeConfig.input.tenantData = { ... this.tenantData };
          mfeConfig.input.tenantSettingsInfo = { ... this.tenantSettingsInfo };
          mfeConfig.input.tenantFeatureValues = [... this.tenantFeatureValues];
          mfeConfig.input.tenantFeatures = [... this.tenantFeatures];
          this.rdsTenantMfeConfig = mfeConfig;
        },
        deleteEvent: (event: any) => {
          this.store.dispatch(deleteTenant(event.id))
        },
        onSaveFeatures: (feature: any) => {
          this.store.dispatch(updateTenantFeatureValues(feature))
        }
      }
    };

    this.store.dispatch(getEditionComboboxItems())
    this.store.select(selectEditionComboboxItems).subscribe((res: any) => {
      if (res && res.editions) {
        this.editionList = res.editions;
        const mfeConfig = this.rdsTenantMfeConfig
        mfeConfig.input.editionList = [... this.editionList];
        this.rdsTenantMfeConfig = mfeConfig;
      }
    })

    this.store.dispatch(getTenants());
    this.store.select(selectAllTenants).subscribe((res: any) => {
      this.tenantTableData = [];
      if (res && res.tenants.items) {
        res.tenants.items.forEach((element: any) => {
          const status: string = (element.isActive) ? 'Active' : 'Inactive';
          // const statusTemplate = `<div class="status ${status}">${status}</div>`;
          let statusTemplate;
          if (element.isActive) {
            statusTemplate = `<div> <span class="badge badge-success">Active</span></div>`;
          } else {
            statusTemplate = `<div><span class="badge badge-secondary">Inactive</span></div>`;
          }
          const editionTemplate = `<div class="d-flex align-items-center"><div class="edition ${element.editionDisplayName}"></div><div class="">${element.editionDisplayName}</div></div>`;
          const tenantInfoTemplate = `<div class=""><div><div><span>${element.name}</span></div><span class="text-muted">${element.tenancyName} </span></div></div>`;
          const item: any = {
            tenantInfoTemplate: tenantInfoTemplate,
            statusTemplate: statusTemplate,
            editionDisplayName: element.editionDisplayName,
            editionTemplate: editionTemplate,
            id: element.id,
            name:element.tenancyName
            // creationTime:this.datepipe.transform(new Date(element.creationTime),'dd-MM-yyyy h:mm:ss a')
          }
          this.tenantTableData.push(item);
        });
        const mfeConfig = this.rdsTenantMfeConfig
        mfeConfig.input.tenantList = [... this.tenantTableData];
        this.rdsTenantMfeConfig = mfeConfig;
      }
    });

    this.store.select(selectTenantInfo).subscribe((res: any) => {
      if (res && res.tenantInfo && res.status === 'success') {
        this.tenantSettingsInfo = {};
        this.tenantData = {};
        this.tenantSettingsInfo['connectionString'] = res.tenantInfo.connectionString;
        this.tenantSettingsInfo['isActive'] = res.tenantInfo.isActive;
        this.tenantSettingsInfo['isInTrialPeriod'] = res.tenantInfo.isInTrialPeriod;
        this.tenantData['tenancyName'] = res.tenantInfo.tenancyName;
        this.tenantData['tenantName'] = res.tenantInfo.name;
        this.tenantData['adminEmailAddress'] = res.tenantInfo.adminEmailAddress;
        this.tenantData['edition'] = res.tenantInfo.editionId;
        this.tenantData['unlimitedSubscription'] = true;
        this.tenantData['id'] = res.tenantInfo.id;
        this.tenantData['subscriptionEndDate'] = (res.tenantInfo.subscriptionEndDateUtc) ? new Date(res.tenantInfo.subscriptionEndDateUtc) : null;
        const mfeConfig = this.rdsTenantMfeConfig
        mfeConfig.input.tenantData = { ... this.tenantData };
        mfeConfig.input.tenantSettingsInfo = { ... this.tenantSettingsInfo };
        this.rdsTenantMfeConfig = mfeConfig;
      }
    });
    this.store.select(selectTenantFeature).subscribe((res: any) => {
      if (res && res.tenantFeature && res.status === 'success') {
        this.tenantFeatureValues = res.tenantFeature.featureValues;
        this.tenantFeatures = this.convertArraytoTreedata(res.tenantFeature.features);

        // this.editionList = res.editions;
        const mfeConfig = this.rdsTenantMfeConfig
        mfeConfig.input.tenantFeatureValues = [... this.tenantFeatureValues];
        mfeConfig.input.tenantFeatures = [... this.tenantFeatures];

        this.rdsTenantMfeConfig = mfeConfig;
      }
    })
  }
  convertArraytoTreedata(data: any) {
    const treedaTA = this._arrayToTreeConverterService.createTree(
      data,
      'parentName',
      'name',
      null,
      'children',
      [
        {
          target: 'label',
          source: 'displayName',
        },
        {
          target: 'expandedIcon',
          value: 'fa fa-folder-open text-warning',
        },
        {
          target: 'collapsedIcon',
          value: 'fa fa-folder text-warning',
        },
        {
          target: 'expanded',
          value: true,
        },
      ],
      1
    );
    return treedaTA;
  }

}
