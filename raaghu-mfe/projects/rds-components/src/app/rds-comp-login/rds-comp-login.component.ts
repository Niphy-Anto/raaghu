import {
  Component,
  EventEmitter,
  Injector,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MfeBaseComponent } from '@libs/shared';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'rds-login-comp',
  templateUrl: './rds-comp-login.component.html',
  styleUrls: ['./rds-comp-login.component.scss'],
})
export class RdsLoginComponent extends MfeBaseComponent implements OnInit {
  @Input() userNameData: any;
  @Input() userPasswordData: any;
  @Input() rememeberMe: boolean;
  @Input() TenantNameData: any;
  @Input() TenancyName: string;
  @Input() TenantName: string;
  @Input() enableSwitchtenent: boolean;
  @Input() UserName: string = 'Email';
  @Input() Password: string = 'Password';
  @Input() userNameInputType: string = 'email';
  @Input() userPasswordInputType: string = 'password';
  buttonLabel: string = 'Login';
  buttonLabelUp: string = 'Signup'
  @Input() buttonColorType: string = 'secondary';
  @Input() buttonColorTypeUp: string = 'light';
  checkboxTitle: string = 'Remember me';
  // @Output() onRememberMeToggle = new EventEmitter<Event>();
  @Output() onClick = new EventEmitter<any>();
  @Output() onSwitchTenant = new EventEmitter<any>();
  @Output() onShimmerLoad = new EventEmitter<any>();
  @Input() tenantdisabled: boolean;
  @Input() disabledSwitchTenant: boolean = true;
  emailPattern: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private injector: Injector, private formBuilder: FormBuilder, public translate: TranslateService) {
    super(injector);
   }

  ngOnInit(): void {
    this.onShimmerLoad.emit(false)
  }

  //for getting remebrme value
  onChangeRememberme(event: any) {
    this.rememeberMe = event.detail;
  }

  submit(loginForm: NgForm) {
    // if (loginForm.invalid) {
    //   return;
    // }
    this.emitEvent('login', {
      userEmail: this.userNameData,
      userPassword: this.userPasswordData,
      rememberme: this.rememeberMe,
    });
  }
  ChangeTenant() {
    this.onSwitchTenant.emit(this.TenantNameData)
  }
  switchTenanat(event: any, tenantForm: NgForm) {
    if (event) {
      this.tenantdisabled = false;
      this.enableSwitchtenent = false
      this.disabledSwitchTenant = false;
    } else {
      this.tenantdisabled = true;
      this.enableSwitchtenent = true
      this.disabledSwitchTenant = true;
      this.TenantNameData = '';
      this.onSwitchTenant.emit(null)
    }
  }
}
