import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavProfileComponent} from "./nav-profile/nav-profile.component";


const routes: Routes = [
  { path: '', component: NavProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavProfileRoutingModule { }
