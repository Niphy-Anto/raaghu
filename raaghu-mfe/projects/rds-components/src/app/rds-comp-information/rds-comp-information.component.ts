import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rds-comp-information',
  templateUrl: './rds-comp-information.component.html',
  styleUrls: ['./rds-comp-information.component.scss'],
})
export class RdsCompInformationComponent implements OnInit, OnChanges {
  propertyName: string;
  displayName: string;
  permission: string;
  inputType: any = '';
  DynamicPropertyId: any;
  @ViewChild('dynamicPropertiesCreationForm') dynamicPropertiesInfoForm: NgForm;
  @Input() dynamicPropertiesData: any = {};
  @Input() inputTypeList: any[] = [];
  entityNames: any[];
  @Output() dynamicPropertiesInfo = new EventEmitter<any>();
  @Input() resetFormSubject : Observable<boolean> = new Observable<boolean>();
  isEdit: boolean = false;
  constructor(private store: Store, public translate:TranslateService) { }
  ngOnInit(): void {
    this.resetFormSubject.subscribe(response => {
      if(response){
       this.dynamicPropertiesInfoForm.reset();
      // Or do whatever operations you need.
    }
   })
    if (!this.dynamicPropertiesData) {
      this.dynamicPropertiesData = {};
      this.dynamicPropertiesData['propertyName'] = '';
      this.dynamicPropertiesData['displayName'] = '';
      this.dynamicPropertiesData['inputType'] = '';
    }
    setTimeout(() => {
      if (this.dynamicPropertiesData && this.dynamicPropertiesInfoForm) {
        this.dynamicPropertiesInfoForm.statusChanges.subscribe((res) => {
          if (res === 'VALID') {
            this.dynamicPropertiesInfo.emit({
              dynamicProperties: this.dynamicPropertiesData,
            });
          } else {
            this.dynamicPropertiesInfo.emit({ dynamicProperties: undefined });
          }
        });
      }
    }, 100);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.dynamicPropertiesData) {
      this.dynamicPropertiesData = {};
      this.dynamicPropertiesData['propertyName'] = '';
      this.dynamicPropertiesData['displayName'] = '';
      this.dynamicPropertiesData['inputType'] = '';
      this.dynamicPropertiesInfoForm.reset();
    }
  }
}
