import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import {RouterModule} from "@angular/router";
import {AuthorizationModule} from "../auth/authorization.module";
import {LoginComponent} from "../modules/general/login/login/login.component";
import {RegisterComponent} from "../modules/general/register/register/register.component";

const routes: Routes = [
  {path: 'auth', children: [
      {path: 'login', component: LoginComponent, loadChildren: () => import('../auth/authorization.module').then(m => AuthorizationModule)},
      {path: 'register', component: RegisterComponent, loadChildren: () => import('../auth/authorization.module').then(m => AuthorizationModule)},
    ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NavbarRoutingModule { }
