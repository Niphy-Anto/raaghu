import { Component, OnInit } from '@angular/core';
import { ComponentLoaderOptions, SharedService } from '@libs/shared';
import { Store } from '@ngrx/store';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
import { getAuditLogs, getEntityChanges, selectAllAuditLogs, selectAllchangeLogs, selectDefaultLanguage } from '../../../libs/state-management/src/public-api';
import { DateTime } from 'luxon';
import { TranslateService } from '@ngx-translate/core';
import {
  transition,
  trigger,
  query,
  style,
  animate,
} from '@angular/animations';
import { TableAction } from 'projects/rds-components/src/models/table-action.model';
declare var bootstrap: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      transition('* <=> *', [
        query(':enter',
          [
            style({ opacity: 0 })
          ],
          { optional: true }
        ),
        query(':leave',
          [
            style({ opacity: 1 }),
            animate('0.4s', style({ opacity: 0 }))
          ],
          { optional: true }
        ),
        query(':enter',
          [
            style({ opacity: 0 }),
            animate('0.4s', style({ opacity: 1 }))
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  isAnimation: boolean = true;
  public rdsauditLogMfeConfig: ComponentLoaderOptions;
  public operationLogs: any = [];
  public changeLogs: any = [];
  public operationLogsHeaders: TableHeader[] = [{ key: 'userName', displayName: 'User Name', dataType: 'text', sortable: true, filterable: true },
  { key: 'serviceName', displayName: 'Service', dataType: 'text', sortable: true, filterable: true },
  { key: 'methodName', displayName: 'Action', dataType: 'text', sortable: true, filterable: true },
  { key: 'executionDuration', displayName: 'Duration', dataType: 'text', sortable: true, filterable: true },
  { key: 'clientIpAddress', displayName: 'IP Address', dataType: 'text', sortable: true, filterable: true },
  // { key: 'clientName', displayName: 'Client', dataType: 'html', sortable: true, filterable: true },
  // { key: 'browserInfo', displayName: 'Browser', dataType: 'html', sortable: true, filterable: true},
  { key: 'executionTime', displayName: 'Time', dataType: 'text', sortable: true, filterable: true },


  ];

  public changeLogsHeaders: TableHeader[] = [{ key: 'entityTypeFullName', displayName: 'Action', dataType: 'text', sortable: true, filterable: true },
  { key: 'changeTypeName', displayName: 'Object', dataType: 'text', sortable: true, filterable: true },
  { key: 'userName', displayName: 'User Name', dataType: 'text', sortable: true, filterable: true },
  { key: 'changeTime', displayName: 'Time', dataType: 'text', sortable: true, filterable: true },
    // { key: 'view', displayName: 'Action', dataType: 'view', sortable: false, filterable: false },
  ];

  auditLogsTableData: any = [];
  isShimmer: boolean = false;

  public navtabsItems: any = [
    {
      label: this.translate.instant('Operation Logs'),
      tablink: '#operation-logs',
      ariacontrols: 'operation-logs',
    },
    {
      label: 'Change Logs',
      tablink: '#change-logs',
      ariacontrols: 'change-logs',
    }];

  selectedIndex: any = 0;
  startDate: any = undefined;
  endDate: any = undefined;
  user: any;
  service: any = '';
  from: any = '';
  to: any = '';
  action: any = '';
  status: any = '';
  browserInfo: any = '';
  showFilters: boolean = false;
  listItem1 = [
    { value: 'Export To Excel', some: 'value', key: 'operation-log', icon: 'export_data', iconWidth: '20px', iconHeight: '20px' },
  ];
  listItem2 = [
    { value: 'Export To Excel', some: 'value', key: 'change-log', icon: 'export_data', iconWidth: '20px', iconHeight: '20px' },
  ];
  statusList: any = [
    { value: '', some: 'All' },
    { value: true, some: 'Sucsses' },
    { value: false, some: 'HasError' }]
  browserList: any = [
    { value: '', some: 'Select Browser' },
    { value: 'Chrome', some: 'Chrome' },
    { value: 'Opera', some: 'Opera' },
    { value: 'Edge', some: 'Edge' },
    { value: 'Safari', some: 'Safari' },
    { value: 'UC Browser', some: 'UC Browser' }]
  selectedRowData: any;
  viewAuditLogsCanvas: boolean = false;
  viewChangeLogsCanvas: boolean = false;
  auditLogsCanvasTitle: string = this.translate.instant('AUDIT LOG DETAIL');
  changeLogsCanvasTitle: string = this.translate.instant('Change LOG DETAIL');
  actions: TableAction[] = [{ id: 'view', displayName: this.translate.instant('View') }];
  actionForChangeLogs: TableAction[] = [{ id: 'view', displayName: this.translate.instant('View') }]

  changeLogStartdate: any = undefined
  changeLogEndDate: any = undefined
  changeLogUsername: any = undefined


  constructor(private store: Store, public translate: TranslateService,private sharedService:SharedService,) { }

  ngOnInit(): void {
    this.isAnimation = true;
    this.isShimmer=true;
    this.store.select(selectDefaultLanguage).subscribe((res: any) => {

      if (res) {

        this.translate.use(res);

      }

    })
    this.rdsauditLogMfeConfig = {

      name: 'RdsCompAuditLogs',
      input: {
        // operationLogsHeaders: this.operationLogsHeaders,
        // operationLogs: this.operationLogs,
        // changeLogsHeaders: this.changeLogsHeaders,
        // changeLogs: this.changeLogs,
        // isShimmer:true
      },
      output: {
        //         deleteEvent: (eventData) => {
        //           const index: number = this.operationLogs.findIndex((x: any) => x.id === eventData.id)
        //           const data = this.operationLogs;
        //           data.splice(index, 1)
        //           this.operationLogs = [...data];
        //           this.rdsauditLogMfeConfig.input.operationLogs = [...this.operationLogs];
        //         },

        //         parameterData:(eventData) => {
        //           this.filterAuditLog(eventData)
        //         },

        //         ChangeLogparameterData:(eventData)=>{
        // this.filterChangeLog(eventData);
        //         }
      }
    };
    let date = new Date();
    let lastday = new Date(Date.now() - 86400000);
    const auditLogParamsData: any = {
      startDate: this.formatDate(lastday, 'yyyy-LL-dd HH:mm:ss'),
      endDate: this.formatDate(date, 'yyyy-LL-dd HH:mm:ss'),
      userName: '',
      serviceName: '',
      MethodName: '',
      BrowserInfo: '',
      HasException: '',
      minExecutionDuration: '',
      maxExecutionDuration: '',
      sorting: '',
      maxResultCount: 10,
      skipCount: 0
    }
    this.store.dispatch(getAuditLogs(auditLogParamsData));
    this.store.select(selectAllAuditLogs).subscribe((res: any) => {
      this.operationLogs = [];
      if (res && res.items && res.items.length > 0) {
        this.isAnimation = false;
        res.items.forEach((element: any) => {
          const item: any = {
            parameters: element.parameters,
            userName: element.userName,
            serviceName: element.serviceName,
            executionDuration: element.executionDuration,
            clientIpAddress: element.clientIpAddress,
            clientName: element.clientName,
            browserInfo: element.browserInfo,
            executionTime: this.formatDate(element.executionTime, 'yyyy-LL-dd HH:mm:ss'),
            methodName: element.methodName,
            exception: element.exception,
            id: element.id,
            name: element.methodName,
          }
          this.operationLogs.push(item);
        });
        this.isShimmer=false;
        //  const mfeConfig = this.rdsauditLogMfeConfig
        //  mfeConfig.input.operationLogs = [... this.auditLogsTableData];
        //  mfeConfig.input.isShimmer=false;
        //  this.rdsauditLogMfeConfig = mfeConfig;
      }

    })
  }

  filterChangeLog(eventData) {
    const ChangeLogParamsData: any = {

      StartDate: this.formatDate(eventData.StartDate, 'yyyy-LL-dd HH:mm:ss'),
      EndDate: this.formatDate(eventData.EndDate, 'yyyy-LL-dd HH:mm:ss'),
      UserName: eventData.userName,
      Sorting: '',
      MaxResultCount: 10,
      SkipCount: 0,
    }
    this.store.dispatch(getEntityChanges(ChangeLogParamsData));
    this.store.select(selectAllchangeLogs).subscribe((res: any) => {
      this.changeLogs = [];
      if (res && res.items && res.items.length > 0) {
        res.items.forEach((element: any) => {
          const item: any = {
            userName: element.userName,
            changeTime: element.changeTime,
            entityTypeFullName: element.entityTypeFullName,
            changeTypeName: element.changeTypeName,

          }
          this.changeLogs.push(item);
        });

      }
      // const mfeConfig = this.rdsauditLogMfeConfig
      // mfeConfig.input.changeLogs = [... this.changeLogs];
      // this.rdsauditLogMfeConfig = mfeConfig;
    })
  }

  filterAuditLog(eventData) {
    let date = new Date();

    const auditLogParamsData: any = {

      startDate: this.formatDate(eventData.startDate, 'yyyy-LL-dd HH:mm:ss'),
      endDate: this.formatDate(eventData.endDate, 'yyyy-LL-dd HH:mm:ss'),
      userName: eventData.userName,
      serviceName: eventData.serviceName,
      MethodName: eventData.MethodName,
      BrowserInfo: eventData.BrowserInfo,
      HasException: eventData.HasException,
      minExecutionDuration: eventData.minExecutionDuration,
      maxExecutionDuration: eventData.maxExecutionDuration,
      sorting: '',
      maxResultCount: 10,
      skipCount: 0

    }
    this.store.dispatch(getAuditLogs(auditLogParamsData));
    this.store.select(selectAllAuditLogs).subscribe((res: any) => {
      this.operationLogs = [];
      if (res && res.items && res.items.length > 0) {
        res.items.forEach((element: any) => {
          const item: any = {
            parameters: element.parameters,
            userName: element.userName,
            serviceName: element.serviceName,
            executionDuration: element.executionDuration,
            clientIpAddress: element.clientIpAddress,
            clientName: element.clientName,
            browserInfo: element.browserInfo,
            executionTime: this.formatDate(element.executionTime, 'yyyy-LL-dd HH:mm:ss'),
            methodName: element.methodName,
            exception: element.exception,
            name: element.methodName,
          }
          this.operationLogs.push(item);
        });

      }
      // const mfeConfig = this.rdsauditLogMfeConfig
      // mfeConfig.input.operationLogs = [... this.auditLogsTableData];
      // this.rdsauditLogMfeConfig = mfeConfig;
    })

  }
  formatDate(date: DateTime | Date, format: string): string {

    if (date instanceof Date) {

      return this.formatDate(this.fromJSDate(date), format);

    }



    return date.toFormat(format);

  }

  fromJSDate(date: Date): DateTime {

    return DateTime.fromJSDate(date);

  }

  deleteEvent(eventData) {
    const index: number = this.operationLogs.findIndex((x: any) => x.id === eventData.id)
    const data = this.operationLogs;
    data.splice(index, 1)
    this.operationLogs = [...data];
    this.rdsauditLogMfeConfig.input.operationLogs = [...this.operationLogs];
  }

  parameterData(eventData) {
    this.filterAuditLog(eventData)
  }

  ChangeLogparameterData(eventData) {
    this.filterChangeLog(eventData);
  }

  exportToExcel(navTab: string): void {
    if (navTab === 'operation-logs') {

      this.downloadCSV(this.operationLogs, this.operationLogsHeaders, 'operation_logs');
    } else {
      this.downloadCSV(this.changeLogs, this.changeLogsHeaders, 'change_logs');
    }
  }

  downloadCSV(tableData: any, tableHeaders: TableHeader[], filename: string): void {
    const csvData: any = this.ConvertToCSV(tableData, tableHeaders);
    const blob: any = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const dwldLink: any = document.createElement('a');
    const url: any = URL.createObjectURL(blob);
    const isSafariBrowser: boolean = navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1;
    if (isSafariBrowser) {  // if Safari open in new window to save file with random filename.
      dwldLink.setAttribute('target', '_blank');
    }
    dwldLink.setAttribute('href', url);
    dwldLink.setAttribute('download', filename + '.csv');
    dwldLink.style.visibility = 'hidden';
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }

  public ConvertToCSV(objArray: Array<object>, headerList: TableHeader[]): string {
    const array: any = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let str: string = '';
    let row: string = 'S.No,';
    // const displayedHeaders: Array<string> = ['Name', 'Time', 'Value'];
    for (const index in headerList) {
      row += headerList[index].displayName + ',';
    }
    row = row.slice(0, -1);
    str += row + '\r\n';
    for (let i: number = 0; i < array.length; i++) {
      let line: any = (i + 1) + '';
      for (const index in headerList) {
        if (index) {
          const head: any = headerList[index].key;
          line += ',' + array[i][head];
        }
      }
      str += line + '\r\n';
    }
    return str;
  }

  getNavTabItems(): any {
    this.navtabsItems[0].label = this.translate.instant('Operation Logs');
    this.navtabsItems[1].label = this.translate.instant('Change Logs');
    return this.navtabsItems;
  }

  onSelectnode(event: any) {
    this.selectedIndex = event;
    if (event > 0) {
      this.sharedService.setTopNavTitle(this.navtabsItems[event].label);
    } else {
      this.sharedService.setTopNavTitle('');
    }

  }

  startDateModify(event) {

    this.startDate = event;
    this.sendParameterData();

  }
  endDateModify(event) {
    this.endDate = event;
    this.sendParameterData();
  }

  userModify(event) {
    this.sendParameterData();
  }
  serviceModify(event) {
    this.sendParameterData();
  }
  fromModify(event) {
    this.sendParameterData();
  }
  toModify(event) {
    this.sendParameterData();
  }
  actionModify(event) {
    this.sendParameterData();
  }
  exceptionModify(event) {
    this.status = event.item.some
    this.sendParameterData();
  }
  SelectBroser(event) {
    this.browserInfo = event.item.some
    this.sendParameterData();
  }
  sendParameterData() {
    if (this.startDate && this.endDate) {
      this.parameterData({
        startDate: this.startDate, endDate: this.endDate, userName: this.user, serviceName: this.service,
        minExecutionDuration: this.from, maxExecutionDuration: this.to, MethodName: this.action, HasException: this.status, BrowserInfo: this.browserInfo
      })
    }
  }

  showAdvancedFilter() {
    this.showFilters = !this.showFilters;
  }

  onSelectMenu(event: any) {
    if (event.key === 'operation-log') {
      this.exportToExcel('operation-logs');
    }
    else if (event.key === 'change-log') {
      this.exportToExcel('change-logs');
    }
  }

  delete(event: any): void {
    this.deleteEvent(event);
  }

  onActionSelect(event: any): void {
    if (event.actionId === 'view') {
      this.selectedRowData = event.selectedData;
      // this.deleteEdition.emit(event.selectedData);
      this.showAuditLogDetail();
    }
  }

  onChangeActionSelect(event: any): void {
    if (event.actionId === 'view') {
      console.log(event.selectedData);
      this.selectedRowData = event.selectedData;
      // this.deleteEdition.emit(event.selectedData);
      this.showAuditChangeLogDetail();
    }
  }

  showAuditLogDetail(): void {
    this.viewAuditLogsCanvas = true;
    this.auditLogsCanvasTitle = 'AUDIT LOG DETAIL';
    setTimeout(() => {
      var offcanvas = document.getElementById('auditLogCanvas');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);
  }

  changelogefiltermodify(event) {
    this.sendChangelogParamter();
  }
  sendChangelogParamter() {
    if (this.changeLogStartdate && this.changeLogEndDate) {
      this.ChangeLogparameterData({ StartDate: this.changeLogStartdate, EndDate: this.changeLogEndDate, UserName: this.changeLogUsername })
    }
  }

  showAuditChangeLogDetail(): void {
    this.viewChangeLogsCanvas = true;
    this.changeLogsCanvasTitle = 'Change LOG DETAIL';
    setTimeout(() => {
      var offcanvas = document.getElementById('changeLogCanvas');
      var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
      bsOffcanvas.show();
    }, 100);
  }

  onClose(): void {
    this.viewAuditLogsCanvas = false;
    this.selectedRowData = undefined;
  }
}
