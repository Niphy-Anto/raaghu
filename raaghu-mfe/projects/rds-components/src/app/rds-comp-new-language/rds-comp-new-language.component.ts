import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

export class Language {
  public name: string;
  public icon: string;
  public isEnabled: boolean;
  public id: number

}

@Component({
  selector: 'app-rds-comp-new-language',
  templateUrl: './rds-comp-new-language.component.html',
  styleUrls: ['./rds-comp-new-language.component.scss'],
  providers: [
    DatePipe
  ]
})
export class RdsCompNewLanguageComponent implements OnInit, DoCheck, OnChanges {
  constructor(public datepipe: DatePipe, public translate: TranslateService) { }
  @Output() onLanguageSave = new EventEmitter<any>()
  @Input() flags: any[] = []
  // @Input() selectedLanguage: any;
  @Input() languageNames: any[] = []
  @Input() EditShimmer: boolean = false;
  listLanguage: any
  listcountrycode: any
  LanguageData: any
  name: string = '';
  icon: string = '';
  id: number | undefined = undefined;
  isEnabled: boolean = false;
  languageName = [];
  @Input() selectedLanguage: any = {
    countryCode: '',
    icon: '',
    isEnabled: false,
    id: undefined,
  }
  @Input() public submitted: boolean = false;
  onChangeIsenabled(event: any) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.selectedLanguage.icon && this.flags.length > 0) {
      const selectedLanguage = this.flags.find((x: any) => x.value === this.selectedLanguage.icon);
      this.selectedLanguage.icon = selectedLanguage.some;
    }
    // if (this.selectedLanguage) {
    //   this.name = this.selectedLanguage.countrycode;
    //   this.icon = this.selectedLanguage.icon;
    //   this.id = this.selectedLanguage.id;
    //   this.isEnabled = (this.selectedLanguage.isDisabled) ? false : true;
    // } else {
    //   this.name = '';
    //   this.icon = '';
    //   this.id = undefined;
    //   this.isEnabled = false;
    // }
  }


  ngDoCheck(): void {
    if (this.selectedLanguage) {
      this.name = this.selectedLanguage.countryCode;
      this.icon = this.selectedLanguage.icon;
      this.id = this.selectedLanguage.id;
      this.isEnabled = (this.selectedLanguage.isEnabled) ? false : true;
    } else {
      this.name = '';
      this.icon = '';
      this.id = undefined;
      this.isEnabled = false;
    }
  }

  ngOnInit(): void {
    this.languageName = [];
    this.languageName.push(`${this.selectedLanguage.countryCode}`);
    if (this.selectedLanguage.icon && this.flags.length > 0) {
      const selectedLanguage = this.flags.find((x: any) => x.value === this.selectedLanguage.icon);
      this.selectedLanguage.icon = selectedLanguage.some;
    }
    this.submitted = false;

    if (this.selectedLanguage) {
      this.name = this.selectedLanguage.countrycode;
      this.icon = this.selectedLanguage.icon;
      this.id = this.selectedLanguage.id;
      this.isEnabled = (this.selectedLanguage.isDisabled) ? false : true;
    }
  }

  addLanguage(languageForm: NgForm): void {
    this.submitted = true;
    if (languageForm.invalid || !this.selectedLanguage.icon || this.selectedLanguage.icon === '') {
      return;
    }
    const flag: any = this.flags.find((x: any) => x.some === this.selectedLanguage.icon);
    this.onLanguageSave.emit({ icon: flag.value, isEnabled: this.selectedLanguage.isEnabled, name: this.languageName[0], id: this.selectedLanguage.id });

  }

  onCountryCodeSelect(selectedItem: any): void {
    this.selectedLanguage.icon = selectedItem.item.some;
  }
}
