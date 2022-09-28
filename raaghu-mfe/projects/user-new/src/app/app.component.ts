import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentLoaderOptions, AlertService, ArrayToTreeConverterService } from '@libs/shared';
import { selectDefaultLanguage } from '@libs/state-management';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title: string = 'user';
  currentAlerts: any = [];
  public rdsAlertMfeConfig: ComponentLoaderOptions = {
    name: 'RdsCompAlert',
    input: {
      currentAlerts: this.currentAlerts,
    }
  };
  orgTreeData: any = [];
  treeData1: any;
  constructor(
    public datepipe: DatePipe,
    private store: Store,
    private alertService: AlertService,
    private _arrayToTreeConverterService: ArrayToTreeConverterService,
    public translate:TranslateService
  ) { }
  public rdsUserNewMfeConfig: ComponentLoaderOptions;
  UserPermissionFiltertreeData: any = [];
  roleName: any;
  userList: any = [];
  roles: any = [];
  userinfo: any = undefined;
  Permission: any = [];
  isEdit: boolean = false;
  selectedPermissions: any = [];
  selectedFilterPermissions: any = [];
  OrganizationUnit: any = [];
  resOrganizationUnit:any=[];
  SelectedOrganizationUnit: any = [];
  ngOnInit(): void {
  
    this.store.select(selectDefaultLanguage).subscribe((res: any) => {
      if (res) {
        this.translate.use(res);
      }
    })
  
    this.rdsUserNewMfeConfig = {
      name: 'RdsCompUserPermissionsNew',
      input: {
        userList:[{
            id: 1,  
            isActive: true,
            statusTemplate: `<div><span class="badge badge-success">Active</span></div>`,
            // name: "Amc Corporation",
            name: `<div class="d-flex align-items-center"><div> <img src="../assets/dashboard-data.png" width="40px"></div><div class="ms-2 mt-2"><p class="mb-0"><b>Amc Corporation</b></p><small class="text-muted">Support@amc.com</small></div></div>`, 
            roleId: 1,
            roleName: "General Manager",
            userId: "1231"
          },
          {
            id: 2,
            isActive: true,
            statusTemplate: `<div><span class="badge badge-success">Active</span></div>`,
            // name: "Amc Corporation",
            name: `<div class="d-flex align-items-center"><div> <img src="../assets/dashboard-data.png" width="40px"></div><div class="ms-2 mt-2"><p class="mb-0"><b>Cubic Systems</b></p><small class="text-muted">Support@amc.com</small></div></div>`, 
            roleId: 1,
            roleName: "Team Lead",
            userId: "0198"
          }
        ],
         roles: [
          {
            inheritedFromOrganizationUnit: false,
            isAssigned: true,
            roleDisplayName: "Admin",
            roleId: 1,
            roleName: "Admin",
        },
        {
            inheritedFromOrganizationUnit: false,
            isAssigned: true,
            roleDisplayName: "test",
            roleId: 4,
            roleName: "19bffedb2db041d1ad3e4f6907356e52"
        }
         ],
          permissionsList: [
          {
              "data": {
                  "parentName": null,
                  "name": "TestEditionScopeFeature",
                  "displayName": "[Test edition scope feature]",
                  "description": null,
                  "defaultValue": "false",
                  "inputType": {
                      "name": "CHECKBOX",
                      "attributes": {},
                      "validator": {
                          "name": "BOOLEAN",
                          "attributes": {}
                      }
                  }
              },
              "level": 1,
              "selected": false,
              "label": "[Test edition scope feature]",
              "expandedIcon": "fa fa-folder-open text-warning",
              "collapsedIcon": "fa fa-folder text-warning",
              "expanded": true,
              "selectable": true,
              "children": []
          },
          {
              "data": {
                  "parentName": null,
                  "name": "App.ChatFeature",
                  "displayName": "Chat",
                  "description": null,
                  "defaultValue": "false",
                  "inputType": {
                      "name": "CHECKBOX",
                      "attributes": {},
                      "validator": {
                          "name": "BOOLEAN",
                          "attributes": {}
                      }
                  }
              },
              "level": 1,
              "selected": false,
              "label": "Chat",
              "expandedIcon": "fa fa-folder-open text-warning",
              "collapsedIcon": "fa fa-folder text-warning",
              "expanded": true,
              "selectable": true,
              "children": [
                  {
                      "data": {
                          "parentName": "App.ChatFeature",
                          "name": "App.ChatFeature.TenantToHost",
                          "displayName": "Chat with host",
                          "description": null,
                          "defaultValue": "false",
                          "inputType": {
                              "name": "CHECKBOX",
                              "attributes": {},
                              "validator": {
                                  "name": "BOOLEAN",
                                  "attributes": {}
                              }
                          }
                      },
                      "level": 2,
                      "selected": false,
                      "label": "Chat with host",
                      "expandedIcon": "fa fa-folder-open text-warning",
                      "collapsedIcon": "fa fa-folder text-warning",
                      "expanded": true,
                      "selectable": true,
                      "children": []
                  },
                  {
                      "data": {
                          "parentName": "App.ChatFeature",
                          "name": "App.ChatFeature.TenantToTenant",
                          "displayName": "Chat with other tenants",
                          "description": null,
                          "defaultValue": "false",
                          "inputType": {
                              "name": "CHECKBOX",
                              "attributes": {},
                              "validator": {
                                  "name": "BOOLEAN",
                                  "attributes": {}
                              }
                          }
                      },
                      "level": 2,
                      "selected": false,
                      "label": "Chat with other tenants",
                      "expandedIcon": "fa fa-folder-open text-warning",
                      "collapsedIcon": "fa fa-folder text-warning",
                      "expanded": true,
                      "selectable": true,
                      "children": []
                  }
              ]
          },
          {
              "data": {
                  "parentName": null,
                  "name": "App.MaxUserCount",
                  "displayName": "Maximum user count",
                  "description": "0 = unlimited",
                  "defaultValue": "0",
                  "inputType": {
                      "name": "SINGLE_LINE_STRING",
                      "attributes": {},
                      "validator": {
                          "name": "NUMERIC",
                          "attributes": {
                              "MinValue": 0,
                              "MaxValue": 2147483647
                          }
                      }
                  }
              },
              "level": 1,
              "selected": false,
              "label": "Maximum user count",
              "expandedIcon": "fa fa-folder-open text-warning",
              "collapsedIcon": "fa fa-folder text-warning",
              "expanded": true,
              "selectable": false,
              "children": []
          },
          {
              "data": {
                  "parentName": null,
                  "name": "App.TestCheckFeature",
                  "displayName": "Test check feature",
                  "description": null,
                  "defaultValue": "false",
                  "inputType": {
                      "name": "CHECKBOX",
                      "attributes": {},
                      "validator": {
                          "name": "BOOLEAN",
                          "attributes": {}
                      }
                  }
              },
              "level": 1,
              "selected": false,
              "label": "Test check feature",
              "expandedIcon": "fa fa-folder-open text-warning",
              "collapsedIcon": "fa fa-folder text-warning",
              "expanded": true,
              "selectable": true,
              "children": []
          },
          {
              "data": {
                  "parentName": null,
                  "name": "App.TestCheckFeature2",
                  "displayName": "Test check feature 2",
                  "description": null,
                  "defaultValue": "true",
                  "inputType": {
                      "name": "CHECKBOX",
                      "attributes": {},
                      "validator": {
                          "name": "BOOLEAN",
                          "attributes": {}
                      }
                  }
              },
              "level": 1,
              "selected": false,
              "label": "Test check feature 2",
              "expandedIcon": "fa fa-folder-open text-warning",
              "collapsedIcon": "fa fa-folder text-warning",
              "expanded": true,
              "selectable": true,
              "children": []
          }
      ],
        // isEdit: false,
        // orgTreeData: this.orgTreeData,
        // isShimmer:true,
        // editShimmer:true,
     
      },
       output: {
        Saveuserinfo: (eventData: any) => {
          const data: any = {
            user: eventData.item.userInfo,
            assignedRoleNames: eventData.item.roles,
            organizationUnits: eventData.item.organizationUnits,
            sendActivationEmail: false,
            setRandomPassword: false,
          };
          this.userList.push(data);
        },
        
      }
    
    }
  }
}
