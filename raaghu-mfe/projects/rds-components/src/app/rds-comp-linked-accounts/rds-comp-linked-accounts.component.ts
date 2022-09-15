import { Component, EventEmitter, Injector, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ComponentLoaderOptions, MfeBaseComponent } from '@libs/shared';
import { TranslateService } from '@ngx-translate/core';

import { Account, LinkedAccount } from '../../models/profile.model';

@Component({
  selector: 'app-rds-linked-accounts',
  templateUrl: './rds-comp-linked-accounts.component.html',
  styleUrls: ['./rds-comp-linked-accounts.component.scss']
})
export class RdsLinkedAccountsComponent extends MfeBaseComponent implements OnInit {

  Addaccountflag: boolean = true;
  linkaacountDivFlag: boolean = false;
  linckAccount: any;
  DatasetLinkedAccount: any = [];
  public actions: any = [{ id: 'delete', displayName: 'Delete' }];
  @Input() recordsPerpage: number = 3;
  @Input() pagination: boolean = false;
  @Input() TenantName: string;
  @Input() tenancyName: any;
  @Output() ondelete = new EventEmitter<any>();
  @Output() onUserSave = new EventEmitter<any>();
  @Output() onCancelLinkedAccounts = new EventEmitter<any>()
  @Input() linkedAccountHeaders:any=[];
  @Input() linkedAccountData:any=[];
  @Input() manageLinkedAccountsTabOpened: boolean = false;
  userName: '';
  Tenancyname: '';
  Password: '';

  showNewLinkAccoutButton: boolean = true;
  showManageLinkAccountTable: boolean = false;



  @Output()
  LinkAccountSave = new EventEmitter<{ item: any }>()
  constructor(private injector: Injector, public translate: TranslateService) {
    super(injector)
  }

  ngOnInit(): void {
    this.on('tenancyData').subscribe(res => {
      this.emitEvent('tenancyDataAgain', res);
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.manageLinkedAccountsTabOpened) {
      this.onCancel();
    }
  }
  hideandShowaccountform() {
    this.showNewLinkAccoutButton = false;
    this.showManageLinkAccountTable = false;
    this.linkaacountDivFlag = !this.linkaacountDivFlag;
    this.Password = '';
    this.Tenancyname = '';
    this.userName = '';
  }

  LinkaccountValidator() {
    if (this.userName && this.Password) {
      this.Addaccountflag = false
    } else {
      this.Addaccountflag = true
    }
  }

  saveLinkAccount() {
    // const data = this.LinkedAccountTable.LinkedAccounts
    // data.push(this.linckAccount);
    // this.LinkedAccountTable.LinkedAccounts = [...data]
    // this.linkaacountDivFlag = !this.linkaacountDivFlag;
    // this.linckAccount=new Account();

    // this.LinkedAccountTable.LinkedAccounts.push(this.linckAccount);
    // const mfeConfig = this.rdsLinkedAccountTableMfeConfig
    // mfeConfig.input.tableData = [... this.LinkedAccountTable.LinkedAccounts];
    // this.rdsLinkedAccountTableMfeConfig = mfeConfig;
    // this.linckAccount = {
    // userName: '',
    // Tenancyname: '',
    // Password: ''
    // };
    // // this.linkaacountDivFlag = !this.linkaacountDivFlag;
    // this.LinkaccountValidator();
    this.emitEvent('tenancyData', {
      userNameOrEmailAddress: this.userName,
      tenancyName: this.Tenancyname,
      password: this.Password
    })
  }

  saveAllLinkAccount(linkedAccount: NgForm) {
    linkedAccount.form.markAllAsTouched();
    this.showNewLinkAccoutButton = true;
    this.linkaacountDivFlag = false;
    this.showManageLinkAccountTable = true;
    const data: any = { usernameOrEmailAddress: this.userName, password: this.Password, tenancyName: this.Tenancyname };
    this.onUserSave.emit(data);

  }

  onCancel(): void {
    this.linkaacountDivFlag = false;
    this.showNewLinkAccoutButton = true;
  }



}
