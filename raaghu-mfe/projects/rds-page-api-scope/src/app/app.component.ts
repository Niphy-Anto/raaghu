import { Component, OnInit, TemplateRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import {
  claimTypesAll,
  deleteApiScope,
  getAllApiScope,
  getApiScope,
  saveApiScope,
  updateApiScope,
} from 'projects/libs/state-management/src/lib/state/api-scope/api-scope-action';
import {
  selectAllScope,
  selectApiScope,
  selectClaimTypesAll,
} from 'projects/libs/state-management/src/lib/state/api-scope/api-scope.selector';
import { TableAction } from 'projects/rds-components/src/models/table-action.model';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
import { ComponentLoaderOptions } from '../../../libs/shared/src/public-api';
declare var bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'scope';
  viewCanvas: boolean = false;
  activePage: number = 0;
  scopeUniqueId: any;
  offcanvasId: string = 'scope_canvas';
  scopeTableHeaders: TableHeader[] = [
    {
      displayName: 'Name',
      key: 'name',
      dataType: 'text',
      filterable: true,
      sortable: true,
    },
    {
      displayName: 'Display Name',
      key: 'displayName',
      dataType: 'text',
      filterable: true,
      sortable: true,
    },
    { displayName: 'Description', key: 'description', dataType: 'text' },
  ];
  content!: TemplateRef<any>;
  scopeList: any = [];
  userClaims = [];
  scope: any = {};
  isShimmer: boolean = true;
  canvasTitle: string = 'New Scope';
  public navtabsItems: any = [
    {
      label: this.translate.instant('Basics'),
      tablink: '#basics',
      ariacontrols: 'basics',
    },
    {
      label: this.translate.instant('Claims'),
      tablink: '#resources',
      ariacontrols: 'resources',
    },
  ];

  actions: TableAction[] = [
    { id: 'delete', displayName: 'Delete' },
    { id: 'edit', displayName: 'Edit' },
  ];

  PropertyTableHeader: TableHeader[] = [
    {
      displayName: 'Key',
      key: 'key',
      dataType: 'text',
      dataLength: 30,
      sortable: false,
      required: true,
    },
    {
      displayName: 'Value',
      key: 'value',
      dataType: 'text',
      dataLength: 30,
      sortable: false,
      required: true,
    },
  ];
  PropertyList: any = [];
  PropertyTableData: any = [];
  apiScopeEdit: any;

  constructor(public translate: TranslateService, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getAllApiScope());
    this.store.select(selectAllScope).subscribe((res: any) => {
      if (res && res.items) {
        this.scopeList = [];
        res.items.forEach((ele: any) => {
          const data: any = {
            id: ele.id,
            name: ele.name,
            displayName: ele.displayName,
            description: ele.description,
          };
          this.scopeList.push(data);
        });
        this.isShimmer = false;
      }
    });

    this.store.select(selectApiScope).subscribe((res: any) => {
      if (res) {
        const data: any = {
          name: res.name,
          description: res.description,
          displayName: res.displayName,
          emphasize: res.emphasize,
          enables: res.enables,
          required: res.required,
          showInDiscoveryDocument: res.showInDiscoveryDocument,
        };
        this.apiScopeEdit = data;

        // res.userClaims.forEach((element) => {
        //   const _claimsData = {
        //     apiScopeId: element.apiScopeId,
        //     type: element.type,
        //     left : true,
        //   };
        //   this.userClaims.push(_claimsData);
        // });
        if (res.userClaims && res.userClaims.length > 0) {
          this.userClaims.forEach((claim: any) => {
            if (claim) {
              const _claim = res.userClaims.find(
                (x: any) => x.type == claim.displayName
              );
              if (_claim) {
                claim.left = true;
              }
            }
          });
        }
        this.PropertyList = [];
        if(res.properties && res.properties.length> 0){
          res.properties.forEach((element) => {
            const _PropData = {
              apiScopeId: element.apiScopeId,
              value: element.value,
              key: element.key,
            };
            this.PropertyList.push(_PropData);
          });
        }
      
      }
    });

    this.store.dispatch(claimTypesAll());
    this.store.select(selectClaimTypesAll).subscribe((res: any) => {
      if (res) {
        this.userClaims = [];
        res.forEach((element) => {
          let item = {
            id: element.id,
            displayName: element.name,
            left: false,
          };
          this.userClaims.push(item);
        });
        console.log(this.userClaims, 'this.userClaims');
      }
    });
  }

  onActionSelect(event: any): void {
    if (event.actionId === 'delete') {
      this.store.dispatch(deleteApiScope(event.selectedData.id));
    } else if (event.actionId === 'edit') {
      this.scopeUniqueId = event.selectedData.id;
      this.canvasTitle = this.translate.instant('Edit Scope');
      this.store.dispatch(getApiScope(event.selectedData.id));
      this.newScope(true);
    }
  }

  newScope(edit: boolean = false): void {
    this.viewCanvas = true;
    if (!edit) {
      this.scopeUniqueId = undefined;
      this.canvasTitle = 'New Scope';

      this.navtabsItems = [
        {
          label: this.translate.instant('Basics'),
          tablink: '#basics',
          ariacontrols: 'basics',
        },
        {
          label: this.translate.instant('Claims'),
          tablink: '#resources',
          ariacontrols: 'resources',
        },
      ];
    } else {
      this.canvasTitle = 'Edit Scope';

      this.navtabsItems = [
        {
          label: this.translate.instant('Basics'),
          tablink: '#basics',
          ariacontrols: 'basics',
        },
        {
          label: this.translate.instant('Claims'),
          tablink: '#resources',
          ariacontrols: 'resources',
        },
        {
          label: this.translate.instant('Properties'),
          tablink: '#properties',
          ariacontrols: 'properties',
        },
      ];
    }
    setTimeout(() => {
      var offcanvas = document.getElementById(this.offcanvasId);
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);
  }

  close(): void {
    this.apiScopeEdit = [];
    this.viewCanvas = false;
    this.activePage = 0;
    this.scopeUniqueId = undefined;
  }

  getScopeInfo(event: any): void {
    if (event.next) {
      this.activePage = 1;
    }
    this.scope.basicInfo = event.scopeResource;
  }

  getClaims(event: any): void {
    this.scope.userClaims = event;
  }

  getProperties(event: any): void {
    this.scope.PropertyList = event.Property;
    console.log(event, 'prop');
  }

  save(): void {
    if (this.scopeUniqueId) {
      const _data: any[] = [];
      this.scope.userClaims.forEach((element) => {
        const _claimsData = {
          apiScopeId: element.id,
          type: element.displayName,
        };
        _data.push(_claimsData);
      });
      const _dataProp: any[] = [];
      this.scope.PropertyList.forEach((element) => {
        const _PropData = {
          apiScopeId: element.id,
          value: element.value,
          key: element.key,
        };
        _dataProp.push(_PropData);
      });
      const data: any = {
        id: this.scopeUniqueId,
        body: {
          description: this.scope.basicInfo.description,
          displayName: this.scope.basicInfo.displayName,
          emphasize: this.scope.basicInfo.emphasize,
          enabled: this.scope.basicInfo.enables,
          required: this.scope.basicInfo.required,
          showInDiscoveryDocument: this.scope.basicInfo.showInDiscoveryDocument,
          userClaims: _data,
          properties: _dataProp,
        },
      };
      this.store.dispatch(updateApiScope(data));
    } else {
      const _data: any[] = [];
      this.scope.userClaims.forEach((element) => {
        const _claimsData = {
          apiScopeId: element.id,
          type: element.displayName,
        };
        _data.push(_claimsData);
      });
      const data: any = {
        description: this.scope.basicInfo.description,
        displayName: this.scope.basicInfo.displayName,
        emphasize: this.scope.basicInfo.emphasize,
        enabled: this.scope.basicInfo.enables,
        name: this.scope.basicInfo.name,
        required: this.scope.basicInfo.required,
        showInDiscoveryDocument: this.scope.basicInfo.showInDiscoveryDocument,
        userClaims: _data,
        properties: [],
      };
      this.store.dispatch(saveApiScope(data));
    }
    this.activePage = 0;
    this.viewCanvas = false;
  }

  getBtnName(): string {
    if (this.scopeUniqueId) {
      return 'Update';
    }
    return 'Create';
  }
}
