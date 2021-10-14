import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import {NavProfileModule} from "../nav-profile/nav-profile.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {ProfileRoutingModule} from "./profile-routing.module";



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    NavProfileModule,
    MatToolbarModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
