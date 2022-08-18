import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AlertService, ComponentLoaderOptions } from '@libs/shared';
import { finalize } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { deleteLanguage, getLanguages, setDefaultLanguage, } from 'projects/libs/state-management/src/lib/state/language/language.actions';
import { selectAllLanguages, selectDefaultLanguage } from 'projects/libs/state-management/src/lib/state/language/language.selector';
import { TableHeader } from 'projects/rds-components/src/models/table-header.model';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {
  transition,
  trigger,
  query,
  style,
  animate,
} from '@angular/animations';
declare var bootstrap: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    DatePipe
  ],
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
            animate('1s', style({ opacity: 0 }))
          ],
          { optional: true }
        ),
        query(':enter',
          [
            style({ opacity: 0 }),
            animate('1s', style({ opacity: 1 }))
          ],
          { optional: true }
        )
      ])
    ])
  ]
})

export class AppComponent implements OnInit {
  isAnimation: boolean = true;
  title = 'language';
  currentAlerts: any = [];
  @Input() listItems = [
    { value: 'New Language', some: 'value', key: 'new', icon: 'plus', iconWidth: '20px', iconHeight: '20px' },
  ];
  isShimmer:boolean= false;
  EditShimmer: boolean = false;
  languageCanvasTitle = 'New Language';
  public rdsAlertMfeConfig: ComponentLoaderOptions = {
    name: 'RdsCompAlert',
    input: {
      currentAlerts: this.currentAlerts
    },
    output: {
      onAlertHide: (event: any) => {
        this.currentAlerts = event;
      }
    }
  }
  selectedLanguage: any = {
    countryCode: '',
    icon: '',
    isEnabled: false,
    id: undefined,
  };
  rdsLanguageTableMfeConfig: ComponentLoaderOptions;
  languageTableHeader: TableHeader[] = [
    { displayName: 'Language Name', key: 'languageName', dataType: 'html', dataLength: 30, sortable: true, required: true, filterable: true },
    { displayName: 'Code', key: 'countryCode', dataType: 'text', dataLength: 30, required: true, sortable: true },
    { displayName: 'Is enabled', key: 'statusTemplate', dataType: 'icon', dataLength: 30, required: true, sortable: true },
    { displayName: 'Creation Time', key: 'creationTime', dataType: 'text', dataLength: 30, required: true, sortable: true }
  ]
  loading: boolean = true;
  languageTableData: any = [];
  public viewCanvas: boolean = false;
  constructor(public datepipe: DatePipe, public translate: TranslateService, private store: Store, private alertService: AlertService, private router: Router) { }
  ngOnInit(): void {
    this.isAnimation = true;
    this.store.select(selectDefaultLanguage).subscribe((res: any) => {
      if (res) {
        this.translate.use(res);
      }
    })
    this.subscribeToAlerts();
    this.rdsLanguageTableMfeConfig = {
      name: 'RdsDataTable',
      input: {
        tableHeaders: this.languageTableHeader,
        tableStyle: this.tableStyle,
        width: '100%',
        tableData: this.languageTableData,
        recordsPerPage: this.recordsPerpage,
        pagination: true,
        inlineEdit: false,
        actions: [{ id: 'edit', displayName: 'Edit' }, { id: 'changeText', displayName: 'Change Texts' }, { id: 'setDefaultLanguage', displayName: 'Set as default language' }, { id: 'delete', displayName: 'Delete' }],
        noDataTitle: 'Currently you do not have language',
        isShimmer:true,
      },
      output: {
        onActionSelection: (event: any) => {
          if (event.actionId === 'delete') {
            this.store.dispatch(deleteLanguage(event.selectedData.id))
          } else if (event.actionId === 'edit') {
            this.languageCanvasTitle = 'Edit Language';
            this.selectedLanguage = event.selectedData.name;
            this.openCanvas(true);

          }
          else if (event.actionId === 'setDefaultLanguage') {
            const data: any = { name: event.selectedData.countryCode };
            this.store.dispatch(setDefaultLanguage(data));
          }
          else if (event.actionId === 'changeText') {
            this.redirectToLanguageText();
          }
        },
      }
    };
   this.store.dispatch(getLanguages());

    this.store.select(selectAllLanguages).subscribe((res: any) => {
      this.languageTableData = [];
      if (res && res.languages && res.languages.items && res.languages.items.length > 0 && res.status == "success") {
        this.isAnimation = false;
        let defaultLanguage = res.languages.defaultLanguageName;
        res.languages.items.forEach((element: any) => {
          const status: any = (element.isDisabled) ? { icon: 'cross_mark', width: '24px', height: '16px' } : { icon: 'check_mark', width: '24px', height: '16px' };
          // const statusTemplate = `<div class="fs-3"><i class="bi ${status}"></i></div>`;
          const languageName: string = (element.displayName);
          const defaultLanguageTemplate = `<div> ${languageName} <span class="badge badge-success p-1 mx-1 rounded">Default</span></div>`
          const item: any = {
            id: element.id,
            languageName: element.name === defaultLanguage ? defaultLanguageTemplate : element.displayName,
            countryCode: element.name,
            isEnabled: (element.isDisabled) ? false : true,
            statusTemplate: status,
            icon: element.icon,
            creationTime: this.datepipe.transform(new Date(element.creationTime), 'MM/dd/yyyy, h:mm:ss a'),
            name:element.displayName
          }
          this.languageTableData.push(item);
        });
        const mfeConfig = this.rdsLanguageTableMfeConfig
        mfeConfig.input.tableData = [... this.languageTableData];
        mfeConfig.input.isShimmer=false;
        this.rdsLanguageTableMfeConfig = mfeConfig;


      }
    })


  }

  recordsPerpage: number = 10;
  tableStyle: string = "light";
  Isenabled: boolean;
  languagename: string;
  countrycode: string;
  onChangeIsenabled(event: any) {
    this.Isenabled = event;
  }
  selectedCountrycode(item: any) {
    var Result = item
    this.countrycode = Result.item.value
  }
  selectedLanguagecode(item: any) {
    var Result = item
    this.languagename = Result.item.value
  }
  addLanguage(): void {

    this.languageTableData.push({ languagename: this.languagename, code: this.countrycode, isenabled: this.Isenabled, creationTime: this.datepipe.transform(new Date(), 'dd-MM-yyyy') });
    const mfeConfig = this.rdsLanguageTableMfeConfig
    mfeConfig.input.tableData = [... this.languageTableData];
    this.rdsLanguageTableMfeConfig = mfeConfig;

  }
  addLanguages(language: any) {
    this.languageTableData.push(language.NewLanguage)
  }

  openCanvas(isEdit: boolean): void {
    if (!isEdit) {
      this.selectedLanguage = {
        countryCode: '',
        icon: '',
        isEnabled: false,
        id: undefined,
      };
      this.languageCanvasTitle = 'New Language';
    }else{
      this.languageCanvasTitle = 'Edit Language';

    }
    this.viewCanvas = true;
    setTimeout(() => {

    var offcanvas = document.getElementById('AddLanguage');
    var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
    bsOffcanvas.show();
    }, 10);

  }

  closeCanvas(): void {
    var offcanvas = document.getElementById('AddLanguage');
    var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
    bsOffcanvas.hide();
    this.viewCanvas = false;
    this.selectedLanguage = {
      countryCode: '',
      icon: '',
      isEnabled: false,
      id: undefined,
    };
  }
  subscribeToAlerts() {
    this.alertService.alertEvents.subscribe((alert) => {
      this.currentAlerts = [];
      const currentAlert: any = {
        type: alert.type,
        title: alert.title,
        message: alert.message,
      };
      this.currentAlerts.push(currentAlert);
      const rdsAlertMfeConfig = this.rdsAlertMfeConfig;
      rdsAlertMfeConfig.input.currentAlerts = [...this.currentAlerts];
      this.rdsAlertMfeConfig = rdsAlertMfeConfig;
    });

  }
  redirectToLanguageText() {
    this.router.navigateByUrl('pages/LanguageText');
  }


  // fabmenu for mobile list
  onSelectMenu(event: any) {
    if (event.key === 'new') {
      this.openCanvas(false);
    }
  }
  // languageTableData: any = [] = [{ languagename: 'India', code: 'IND', isenabled: 'true', creationTime: '12-10-1992' },
  // { languagename: 'India', code: 'IND', isenabled: 'true', creationTime: '12-10-1992' },
  // { languagename: 'India', code: 'IND', isenabled: 'true', creationTime: '12-10-1992' },
  // { languagename: 'India', code: 'IND', isenabled: 'false', creationTime: '12-10-1992' },
  // { languagename: 'India', code: 'IND', isenabled: 'false', creationTime: '12-10-1992' },
  // { languagename: 'India', code: 'IND', isenabled: 'false', creationTime: '12-10-1992' },
  // { languagename: 'India', code: 'IND', isenabled: 'true', creationTime: '12-10-1992' }]

}

