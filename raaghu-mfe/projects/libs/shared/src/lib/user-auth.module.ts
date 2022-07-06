import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSessionService } from './app-session.service';
import { LocalStorageService } from './local-storage.service';
import { UserAuthService } from './user-auth.service';

const routes: Routes = [];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
  HttpClientModule],
  exports: [RouterModule],
  providers: [UserAuthService, LocalStorageService, AppSessionService]
})
export class UserAuthModule { }

