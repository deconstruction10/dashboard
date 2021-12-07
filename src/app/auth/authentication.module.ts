import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../modules/general/login/login/login.component';
import {SharedModule} from "../shared/shared.module";
import { RegisterComponent } from '../modules/general/register/register/register.component';
import { LogoutComponent } from '../modules/general/logout/logout/logout.component';
import {ShowHidePasswordModule} from "ngx-show-hide-password";
import {ReactiveFormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {HttpClientModule} from "@angular/common/http";
import {AuthModule} from "@auth0/auth0-angular";
import {AuthenticationService} from "./authentication.service";

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent
  ],
  exports: [
    LoginComponent
  ],
    imports: [
        AuthModule.forRoot({
          domain: 'plutta.eu.auth0.com',
          clientId: 'a6nLOQkYddONgraorr1H5QOhAqTxoEcs',
        }),
        SharedModule,
        CommonModule,
        ShowHidePasswordModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        HttpClientModule
    ],
    providers: [AuthenticationService]
})
export class AuthenticationModule { }
