import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService, AppSessionService, ComponentLoaderOptions, MfeBaseComponent, UserAuthService } from '@libs/shared';
import { AuthenticateModel, AuthenticateResultModel, TokenAuthServiceProxy } from '@libs/shared';
import { Store } from '@ngrx/store';
import { getCurrentLoginInformation, GetProfilePicture, GetSubscriptionExpiringData, ValidateTenantName } from 'projects/libs/state-management/src/lib/state/login/login.actions';
import { selectTenant } from 'projects/libs/state-management/src/lib/state/login/login.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends MfeBaseComponent implements OnInit {
  currentAlerts: any = [];
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
  rdsLoginMfeConfig: ComponentLoaderOptions;
  authenticateModal: AuthenticateModel;
  authenticateResult: AuthenticateResultModel;
  rememberMe: boolean = false;
  loginTokenExpiryDate = 0;
  acessTokenExpiryDate: any;
  refreshTokenExpiryDate: any;
   loadingshimmer:boolean=true;
  constructor(
    private injector: Injector,
    private _userAuthService: UserAuthService,
    private _router: Router,
    private _tokenAuthService: TokenAuthServiceProxy,
    private store: Store,
    private http: HttpClient,
    private alertService: AlertService,
    private sessionService: AppSessionService
  ) {
    super(injector);
    this.authenticateModal = new AuthenticateModel();
    this.authenticateResult = null;
    this.sessionService.init();
  }

  ngOnInit(): void {
    this.subscribeToAlerts();
    const tenantInfo = JSON.parse(localStorage.getItem('tenantInfo'));
    var tenancyName = tenantInfo ? tenantInfo.name : 'Not Selected';
  
    this.rdsLoginMfeConfig = {
      name: 'RdsLogin',
      input: {
        rememeberMe: true,
        TenancyName: tenancyName,
        buttonSpinner: true
      },
      output: {
        onSwitchTenant: (data: any) => {
          this.insertTenant(data);
        },
        onLogin:(data: any) =>{
          this.authenticateModal.userNameOrEmailAddress = data.userEmail;
          this.authenticateModal.password = data.userPassword;
          this.authenticateModal.rememberClient = data.rememberme;
          this.authenticate();
        },
        onShimmerLoad:(event:any)=>{
          this.loadingshimmer=false;
        }
      }
    };
    if(this.sessionService.user) {
      this._router.navigateByUrl('pages/dashboard');
    }
    }

  insertTenant(data: any) {
    const tenantData: any = {
      tenancyName: data,
    }
    const mfeConfig = this.rdsLoginMfeConfig;
    if (data) {
      this.store.dispatch(ValidateTenantName(tenantData));
      this.store.select(selectTenant).subscribe(res => {
        if (res.tenantId) {
          mfeConfig.input.TenancyName = tenantData.tenancyName;
          this.rdsLoginMfeConfig = mfeConfig;
          localStorage.setItem('tenantInfo', JSON.stringify({
            id: res.tenantId,
            name: data
          }));
        }
        else {
          localStorage.removeItem('tenantInfo');
          mfeConfig.input.TenancyName = 'Not Selected';
          this.rdsLoginMfeConfig = mfeConfig;
        }
      })
    }
    else {
      localStorage.removeItem('tenantInfo');
      mfeConfig.input.TenancyName = 'Not Selected';
      this.rdsLoginMfeConfig = mfeConfig;
    }
  }

  subscribeToAlerts() {
    this.alertService.alertEvents.subscribe((alert) => {
      this.currentAlerts = [];
      const currentAlert: any = {
        type: 'error',
        title: 'title',
        message: 'Invalid user name or password',
      };
      this.currentAlerts.push(currentAlert);
      const rdsAlertMfeConfig = this.rdsAlertMfeConfig;
      rdsAlertMfeConfig.input.currentAlerts = [...this.currentAlerts];
      this.rdsAlertMfeConfig = rdsAlertMfeConfig;
    });
// this.alertService.showAlert('title','Invalid user name or password','danger')
  }



  authenticate(redirectUrl?: string): void {
    this._tokenAuthService.authenticate(this.authenticateModal).subscribe({
      next: (result: AuthenticateResultModel) => {
        this.processAuthenticateResult(result, redirectUrl);
        localStorage.setItem('userNameInfo', JSON.stringify({

          username: this.authenticateModal.userNameOrEmailAddress

        }));
        const mfeConfig = this.rdsLoginMfeConfig
        mfeConfig.input.buttonSpinner = true;
      },
      error: (err: any) => {
        const mfeConfig = this.rdsLoginMfeConfig
        mfeConfig.input.buttonSpinner = false;
        this.alertService.showAlert('title','Invalid user name or password','error')
      },
    });
  }

  private processAuthenticateResult(authenticateResult: any, redirectUrl?: string) {
    this.authenticateResult = authenticateResult;
    this.store.dispatch(getCurrentLoginInformation());

    let tokenExpireDate = this.authenticateModal.rememberClient ? new Date().getTime() + 1000 * this.authenticateResult?.expireInSeconds : undefined;
    let refreshTokenExpireDate = this.authenticateModal.rememberClient ? new Date().getTime() + 1000 * this.authenticateResult?.refreshTokenExpireInSeconds : undefined;

    if (authenticateResult?.accessToken != undefined) {
      localStorage.setItem('LoginCredential', JSON.stringify({
        token: this.authenticateResult.accessToken,
        refreshToken: this.authenticateResult.refreshToken,
        expireDate: tokenExpireDate,
        refreshTokenExpireDate: refreshTokenExpireDate
      }));
      this._userAuthService.authenticateUser();
      this.store.dispatch(GetProfilePicture());
      this.store.dispatch(GetSubscriptionExpiringData());
      this._userAuthService.getUserConfiguration('login');
    } else {
      // Unexpected result!
       this._router.navigateByUrl('/pages/login');
    }
  }

}

