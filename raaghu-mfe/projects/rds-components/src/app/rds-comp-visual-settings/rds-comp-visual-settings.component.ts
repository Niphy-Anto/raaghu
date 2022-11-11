import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from '@libs/shared';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'rds-comp-visual-settings',
  templateUrl: './rds-comp-visual-settings.component.html',
  styleUrls: ['./rds-comp-visual-settings.component.scss'],
})
export class RdsCompVisualSettingsComponent implements OnInit {
  constructor(
    public translate: TranslateService,
    private sharedService: SharedService
  ) {}
  ngOnInit(): void {
    if (this.visualsettingsItem && this.visualsettingsItem.length) {
      this.theme = this.visualsettingsItem[0].theme;
      this.fixedFooter = this.visualsettingsItem[0].footer;
      this.desktopFixedHeader = this.visualsettingsItem[0].header;
      this.mobileFixedHeader = this.visualsettingsItem[1].header;
      this.darkMode = this.visualsettingsItem[0].layout;
      this.asideSkin = this.visualsettingsItem[0].menu;
      this.fixedAside = this.visualsettingsItem[1].menu;
      this.allowAsideMinimizing = this.visualsettingsItem[2].menu;
      this.defaultMinimizedAside = this.visualsettingsItem[3].menu;
      this.hoverableAside = this.visualsettingsItem[4].menu;
      this.submenuToggle = this.visualsettingsItem[5].menu;
      this.fixedSubHeader = this.visualsettingsItem[0].subHeader;
    }
  }
  selectedThemeIndex: any = '0';
  dataLoaded = false;
  @Input() navtabItems: any;
  @Input() listskin: any;
  @Input() listSubmenu: any;
  // @Input() theme: string = 'default';
  private theme: string = 'default';
  @Input() visualSettingsHeader: any = {};
  @Input() visualSettingsSubHeader: any = {};
  // @Input() visualSettingsMenu: any = {};
  public darkMode: boolean = false;
  public fixedFooter : boolean = false;
  public fixedSubHeader : boolean = false;
  public desktopFixedHeader : boolean = false;
  public mobileFixedHeader : boolean = false
  public asideSkin = ''
  public fixedAside : boolean = false
  public allowAsideMinimizing : boolean = false;
  public defaultMinimizedAside : boolean = false ;
  public hoverableAside : boolean = false;
  public submenuToggle  ='';
  @Input() isShimmer: boolean = false;
  // @Input() visualSettingsFooter: any = {};
  // visualSettingsLayout: any = {};
  @Input() public visualsettingsItem: any[] = [];
  @Input() visualsetting: any;

  @Output() onSaveVisualsettingsData = new EventEmitter<any>();

  ngDoCheck(): void {
    // if (this.visualsettingsItem && this.visualsettingsItem.length && !this.dataLoaded) {
    //   this.theme = JSON.parse(JSON.stringify(this.visualsettingsItem[0].theme));
    //   this.visualSettingsFooter = JSON.parse(JSON.stringify(this.visualsettingsItem[0].footer));
    //   this.visualSettingsHeader = JSON.parse(JSON.stringify(this.visualsettingsItem[0].header));
    //   this.visualSettingsLayout = JSON.parse(JSON.stringify(this.visualsettingsItem[0].layout));
    //   this.visualSettingsMenu = JSON.parse(JSON.stringify(this.visualsettingsItem[0].menu));
    //   this.visualSettingsSubHeader = JSON.parse(JSON.stringify(this.visualsettingsItem[0].subHeader));
    // }
  }

  saveVisualSettings() {
    this.onSaveVisualsettingsData.emit({
      theme: this.theme,
      footer: { fixedFooter:this.fixedFooter },
      header: {desktopFixedHeader: this.desktopFixedHeader,mobileFixedHeader: this.mobileFixedHeader },
      layout: { darkMode: this.darkMode },
      menu: {asideSkin : this.asideSkin , fixedAside: this.fixedAside , allowAsideMinimizing: this.allowAsideMinimizing, 
             defaultMinimizedAside: this.defaultMinimizedAside, hoverableAside: this.hoverableAside, submenuToggle: this.submenuToggle},
      subHeader: {fixedSubHeader:this.fixedSubHeader},
    });
  }
  getThemeSettings(index: any) {
    this.dataLoaded = true;
    this.selectedThemeIndex = index;
    this.theme = this.visualsettingsItem[index].theme;
    // this.darkMode = darkMode :this.visualsettingsItem[index].layout;

    // this.theme = JSON.parse(JSON.stringify(this.visualsettingsItem[index].theme));
    // this.visualSettingsFooter = JSON.parse(JSON.stringify(this.visualsettingsItem[index].footer));
    // this.visualSettingsHeader = JSON.parse(JSON.stringify(this.visualsettingsItem[index].header));
    // this.visualSettingsLayout = JSON.parse(JSON.stringify(this.visualsettingsItem[index].layout));
    // this.visualSettingsMenu = JSON.parse(JSON.stringify(this.visualsettingsItem[index].menu));
    // this.visualSettingsSubHeader = JSON.parse(JSON.stringify(this.visualsettingsItem[index].subHeader));
  }
  getNavTabItems(): any {
    this.navtabItems[0].label = this.translate.instant('Header Bar');
    this.navtabItems[1].label = this.translate.instant('Sub header');
    this.navtabItems[2].label = this.translate.instant('Menu');
    this.navtabItems[3].label = this.translate.instant('Footer');
    return this.navtabItems;
  }

  onSelectnode(event: any) {
    if (event > 0) {
      this.sharedService.setTopNavTitle(this.navtabItems[event].label);
    } else {
      this.sharedService.setTopNavTitle('');
    }
  }
  getCheckboxValue(event: boolean, type: string): void {
    switch (type) {
      case 'darkMode':
        this.darkMode = event;
        break;
      case 'fixedFooter':
        this.fixedFooter = event;
        break;
      case 'fixedSubHeader':
        this.fixedSubHeader = event;
        break;
      case 'desktopFixedHeader':
        this.desktopFixedHeader = event;
        break;
      case 'mobileFixedHeader':
        this.mobileFixedHeader = event;
        break;
      case 'fixedAside':
          this.fixedAside = event;
        break; 
      case 'allowAsideMinimizing':
        this.allowAsideMinimizing = event;
        break;
      case 'defaultMinimizedAside':
        this.defaultMinimizedAside = event;
        break; 
      case 'hoverableAside' :
        this.hoverableAside = event;
        break;

    }

  }
}
