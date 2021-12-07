import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import {RouterModule} from "@angular/router";
import {AuthenticationModule} from "../auth/authentication.module";
import {LoginComponent} from "../modules/general/login/login/login.component";
import {RegisterComponent} from "../modules/general/register/register/register.component";
import {ProfileComponent} from "../modules/general/profile/profile/profile.component";
import {ProfileModule} from "../modules/general/profile/profile.module";
import {LoginModule} from "../modules/general/login/login.module";
import {RegisterModule} from "../modules/general/register/register.module";
import {HomeComponent} from "../modules/general/home/home/home.component";
import {HomeModule} from "../modules/general/home/home.module";

const routes: Routes = [
  {
    path: 'home', children: [
      {path: 'home', component: HomeComponent, loadChildren: () => import('../modules/general/home/home.module').then(m => HomeModule)}
    ]
  },
  {
    path: 'profile', children: [
      {path: 'profile', component: ProfileComponent, loadChildren: () => import('../modules/general/profile/profile.module').then(m => ProfileModule)},
    ]
  },
  {
    path: 'auth', children: [
      {path: 'login', component: LoginComponent, loadChildren: () => import('../auth/authentication.module').then(m => LoginModule)},
      {path: 'register', component: RegisterComponent, loadChildren: () => import('../auth/authentication.module').then(m => RegisterModule)},
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
