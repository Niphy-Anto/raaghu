import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { ComponentLoaderOptions } from '@libs/shared';
import { getCountryList, saveLanguage, selectAllCountries } from '@libs/state-management';
import { Store } from '@ngrx/store';
import { Item } from 'projects/libs/state-management/src/lib/state/language/language.models';
import { Subscription } from 'rxjs';
declare var bootstrap: any;
@Component({
  selector: 'app-newlanguage',
  templateUrl: './newlanguage.component.html',
  styleUrls: ['./newlanguage.component.scss']
})
export class NewlanguageComponent implements OnInit, OnChanges, OnDestroy {
  public rdsNewLanguageMfeConfig: ComponentLoaderOptions;
  constructor(private store: Store) { }
  @Output()
  onLanguageSave = new EventEmitter<{ NewLanguage: any }>()
  public languageNames: Item[] = [];
  public flags: any = [];
  private subscription: Subscription;
  @Input() selectedLanguage: any = {
    countryCode: '',
    icon: '',
    isEnabled: false,
    id: undefined,
  };
  ngOnChanges(changes: SimpleChanges): void {
    if (this.rdsNewLanguageMfeConfig && this.rdsNewLanguageMfeConfig.input) {
      const rdsNewLanguageMfeConfig = this.rdsNewLanguageMfeConfig;
      rdsNewLanguageMfeConfig.input.selectedLanguage = this.selectedLanguage;
      this.rdsNewLanguageMfeConfig = rdsNewLanguageMfeConfig;
    }

  }

  ngOnInit(): void {
    this.store.dispatch(getCountryList());

    this.rdsNewLanguageMfeConfig = {
      name: 'RdsCompNewLanguage',
      input: {
        flags: this.flags,
        languageNames: this.languageNames,
        selectedLanguage: this.selectedLanguage,
      },
      output: {
        onLanguageSave: (data: any) => {
          const body: any = {
            language: data
          }
          this.store.dispatch(saveLanguage(body));
          var offcanvas = document.getElementById('AddLanguage');
          let openedCanvas = bootstrap.Offcanvas.getInstance(offcanvas);
          openedCanvas.hide();
        },
      }
    };
    this.subscription = this.store.select(selectAllCountries).subscribe((res: any) => {
      if (res) {
        this.languageNames = res.languageNames;
        this.flags = [];
        res.flags.forEach((res: any) => {
          const icon = res.displayText.replace('-', '_')
          this.flags.push({ some: res.displayText, value: res.value, icon: icon, iconWidth: '18px', iconHeight: '18px' })
        })
        const rdsNewLanguageMfeConfig = this.rdsNewLanguageMfeConfig;
        rdsNewLanguageMfeConfig.input.flags = [...this.flags]
        rdsNewLanguageMfeConfig.input.languageNames = [...this.languageNames]
        this.rdsNewLanguageMfeConfig = rdsNewLanguageMfeConfig;
      }
    });

  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}