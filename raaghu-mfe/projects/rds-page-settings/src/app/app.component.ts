import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AlertService, ComponentLoaderOptions, SharedService } from '@libs/shared';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { transition, trigger, query, style, animate, } from '@angular/animations';

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
  currentAlerts: any = [];
  editShimmer: boolean = false;
  
  public settingData: any = {
    emailSettingsData: undefined,
    identityData: undefined,
    themeData:undefined,
    accountData:undefined
   
  };
  emailSettingsInfo:any=[];
  accountInfo:any=[];
  themeInfo:any=[];

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

  @Input() rdsSettingData: any = [];
  @Input() listItems1 = [
    { value: 'Save All', some: 'value', key: 'saveall', icon: 'plus', iconWidth: '20px', iconHeight: '20px' },
  ];
  @Output() onDataSave = new EventEmitter<any>();
  
  activePage: number = 0;
   navtabsItems: any = [
    {
      label: 'Email Settings',
      tablink: '#email',
      ariacontrols: 'email',
    },
    {
      label: 'Identity Management',
      tablink: '#identity',
      ariacontrols: 'identity',
    },
    {
      label: 'Theme',
      tablink: '#theme',
      ariacontrols: 'theme',
    },
    {
      label: 'Account',
      tablink: '#account',
      ariacontrols: 'account',
    }
   ];
 
  @Input() AuthentiactionList:any;
  @Input() StyleList:any;
  @Input() WebList:any;
  @Input() StatusList:any;
  @Input() MenuList:any;


  

  settingsTenantEditionList: any = [];
 
 
  identitymanagementInfo: any=[];


  constructor(private injector: Injector,
    private store: Store,
    private alertService: AlertService,
    private sharedService: SharedService,
    public translate: TranslateService) {

  }
  
  rdsCompSettingsNewMfeConfig: ComponentLoaderOptions = {
    name: 'RdsCompSettingsNew'
  };
 

  ngOnInit(): void {
    this.rdsCompSettingsNewMfeConfig = {
      name: 'RdsCompSettingsNew',
      input: {
        AuthentiactionList : this.AuthentiactionList
       },
      output: {
        onDataSave: (settingData: any) =>{
        settingData.accountData 
        settingData.emailSettingsData,
        settingData.identityData
        settingData.themeData
        }
      
      }
    };

  

}



}