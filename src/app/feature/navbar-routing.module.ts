import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import {RouterModule} from "@angular/router";
import {ProfileComponent} from "../modules/general/profile/profile/profile.component";
import {ProfileModule} from "../modules/general/profile/profile.module";
import {HomeComponent} from "../modules/general/home/home/home.component";
import {HomeModule} from "../modules/general/home/home.module";
import {ProfileGuard} from "../modules/general/profile/profile.guard";
import {SettingsComponent} from "../modules/general/settings/settings/settings.component";
import {SettingsModule} from "../modules/general/settings/settings.module";
import {DataModule} from "../modules/general/data/data.module";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', children: [
      {path: '', component: HomeComponent, loadChildren: () => import('../modules/general/home/home.module').then(m => HomeModule)},
      {path: '', component: SettingsComponent, loadChildren: () => import('../modules/general/settings/settings.module').then(m => SettingsModule)},
    ]
  },
  {
    path: 'profile', children: [
      {path: '', component: ProfileComponent, canActivate: [ProfileGuard], loadChildren: () => import('../modules/general/profile/profile.module').then(m => ProfileModule)},
      {path: 'data', loadChildren: () => import('../modules/general/data/data.module').then(m => DataModule)}
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NavbarRoutingModule { }
