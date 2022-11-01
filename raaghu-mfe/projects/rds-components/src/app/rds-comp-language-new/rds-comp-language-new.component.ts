import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-rds-comp-language-new',
  templateUrl: './rds-comp-language-new.component.html',
  styleUrls: ['./rds-comp-language-new.component.scss']
})
export class RdsCompLanguageNewComponent implements OnInit {

  constructor(public datepipe: DatePipe, public translate: TranslateService) { }
  @Output() onLanguageSave = new EventEmitter<any>();
  @Output() onCloseCanvas = new EventEmitter<any>()
@Input() buttonSpinner : boolean =true;
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
    displayName : ''
  }
  @Input() public submitted: boolean = false;
  onChangeIsenabled(event: any) {

  }
  

  ngOnChanges(changes: SimpleChanges): void {

  }




  ngOnInit(): void {
    this.submitted = false;
 
  }

  addLanguage(languageForm: NgForm): void {
    languageForm.form.markAllAsTouched();
    this.submitted = true;
    this.buttonSpinner=true;
    if (languageForm.invalid || !this.selectedLanguage.icon || this.selectedLanguage.icon === '') {
      return;
    }
    const flag: any = this.flags.find((x: any) => x.some === this.selectedLanguage.icon);
    this.onLanguageSave.emit({ icon: flag.value, isEnabled: this.selectedLanguage.isEnabled, name: this.selectedLanguage.countryCode[0], id: this.selectedLanguage.id , displayName : this.selectedLanguage.displayName });

  }

  onCountryCodeSelect(selectedItem: any): void {
    this.selectedLanguage.icon = selectedItem.item.some;
  }

  closeCanvas(): void {
    this.onCloseCanvas.emit(true);
    this.buttonSpinner=false;
  }
}
