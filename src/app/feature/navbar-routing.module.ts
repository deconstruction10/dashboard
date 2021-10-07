import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import {RouterModule} from "@angular/router";
import {AuthorizationModule} from "../auth/authorization.module";

const routes: Routes = [
  {path: 'auth', children: [
      {path: 'login', loadChildren: () => import('../auth/authorization.module').then(m => AuthorizationModule)},
      {path: 'register', loadChildren: () => import('../auth/authorization.module').then(m => AuthorizationModule)},
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
