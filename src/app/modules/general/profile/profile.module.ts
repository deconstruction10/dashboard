import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import {NavProfileModule} from "../nav-profile/nav-profile.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {ProfileRoutingModule} from "./profile-routing.module";
import {ProfileGuard} from "./profile.guard";
import {MessageModule} from "primeng/message";
import {MessagesModule} from "primeng/messages";



@NgModule({
  providers: [ProfileGuard],
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    NavProfileModule,
    MatToolbarModule,
    ProfileRoutingModule,
    MessageModule,
    MessagesModule
  ]
})
export class ProfileModule { }
