import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rds-comp-account-new',
  templateUrl: './rds-comp-account-new.component.html',
  styleUrls: ['./rds-comp-account-new.component.scss']
})
export class RdsCompAccountNewComponent implements OnInit {
  @Input() public AuthentiactionList: any =  [];
  // AuthentiactionList:any = [  {value:'yes' , displayText:'Yes'},{value:'no', displayText:'No'}];

  @Input() public VersionList: any = [];
  @Input() accountData: any;
  @ViewChild('accountForm')accountForm: NgForm;
  @Output() accountInfo = new EventEmitter<any>();
  constructor() { }
  ngAfterViewInit(): void {
    if (this.accountData && this.accountForm) {
      this.accountForm.statusChanges.subscribe(res => {
        if (res === 'VALID') {
          this.accountInfo.emit(this.accountData);
        } else {
          this.accountInfo.emit(undefined);
        }
      });
    }  }
  ngOnInit(): void {
    if (!this.accountData) {
      this.accountData = {};
      this.accountData['registration'] = false;
      this.accountData['authentication'] = false;
      this.accountData['twofactorauthentication'] = '';
      this.accountData['allowUser'] = false;
      this.accountData['browser'] = false;
      this.accountData['imagacaptcha'] = false;
      this.accountData['securityauthentication'] = false;
      this.accountData['baseUrl'] = 'http://try';
      this.accountData['version'] = '';
      this.accountData['score'] = '';
      this.accountData['site'] = '';
      this.accountData['secret'] = '';
      this.accountData['google'] = false;
      this.accountData['microsoft'] = false;
      this.accountData['twitter'] = false;
    }
  }
  
  selectIdentity() {
  
    this.accountData.emit(this.accountData);
    console.log(this.accountData,'this.accountData');
    
    
   }

   getSelectedValue(event){
    this.AuthentiactionList.twofactorauthentication = event.value;

   }
  
}
