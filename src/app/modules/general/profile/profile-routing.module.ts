import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";
import {ProfileGuard} from "./profile.guard";


const routes: Routes = [
  { path: '', component: ProfileComponent, canActivate: [ProfileGuard] },
];

@NgModule({
  providers: [ProfileGuard],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
