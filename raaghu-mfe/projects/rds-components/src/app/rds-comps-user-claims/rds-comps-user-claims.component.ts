import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rds-comps-user-claims',
  templateUrl: './rds-comps-user-claims.component.html',
  styleUrls: ['./rds-comps-user-claims.component.scss']
})
export class RdsCompsUserClaimsComponent implements OnInit, OnChanges {
  public editionList: any = [{ name: 'Standard', value: 'Standard' }, { name: 'Basic', value: 'Basic' }, { name: 'Premium', value: 'Premium' }, { name: 'Professional', value: 'Professional' }];
  public emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  @Output() userInfo = new EventEmitter<any>();
  @Output() onCancel = new EventEmitter<any>();
  @Input() userData: any;
  @ViewChild('userCreationClaimsForm') userInfoForm: NgForm;
  constructor(public translate: TranslateService) { }
  ngOnInit(): void {
    if (!this.userData) {
      this.userData = {};
      this.userData['type'] = undefined;
      this.userData['value'] = '';

    }
    // setTimeout(() => {
    if (this.userData && this.userInfoForm) {
      this.userInfoForm.statusChanges.subscribe(res => {
        if (res === 'VALID') {
          this.userInfo.emit({ user: this.userData, next: false });
        }
      });
    }

    // }, 100);

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.userData) {
      this.userData = {};
      this.userData['type'] = '';
      this.userData['value'] = '';

    }

  }

  next(userCreationClaimsForm: NgForm): void {
    if (!userCreationClaimsForm || userCreationClaimsForm.invalid) {
      return;
    }
    this.userInfo.emit({ user: this.userData, next: true });
  }


  onEditionSelect(event: any): void {
    this.userData.edition = event.item.value;
  }

}
