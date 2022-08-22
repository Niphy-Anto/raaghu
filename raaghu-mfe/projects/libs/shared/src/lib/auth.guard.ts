import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, CanActivateChild, CanLoad, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserAuthService } from '@libs/shared'
import { AppSessionService } from './app-session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    private _router: Router, 
    private _userAuthService: UserAuthService,
    private _sessionService: AppSessionService
    ) {  }
  permissions:any;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>{
    this._userAuthService.getPermissions().subscribe(res =>{
      this.permissions = res;
      
    })
    return this.canActivateInternal(route.data, state);

  } 

  canActivateInternal(data: any, state: RouterStateSnapshot): Observable<boolean> {
    if (!this._sessionService.user) {  
      this._router.navigateByUrl('/login');
    }

    if (!data || !data['permission']) {
        return of(true);
    }

    if (this.permissions[data['permission']]) {
        return of(true);
    }

    this._router.navigateByUrl(this.selectBestRoute());
    return of(false);
}
canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
  return this.canActivate(route, state);
}

canLoad(route: any): Observable<boolean> | Promise<boolean> | boolean {
  return this.canActivateInternal(route.data, null);
}

  selectBestRoute(): string {
    if (!this._sessionService.user) {
        return '/login';
    }

    return '/pages/dashboard';
  }
}
