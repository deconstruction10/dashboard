import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {ProfileRoutingModule} from "./profile-routing.module";
import {ProfileGuard} from "./profile.guard";
import {MessageModule} from "primeng/message";
import {MessagesModule} from "primeng/messages";
import {HttpClientModule} from "@angular/common/http";
import {MenubarModule} from "primeng/menubar";
import {SettingsModule} from "../settings/settings.module";
import {AvatarModule} from "primeng/avatar";
import {DropdownModule} from "primeng/dropdown";
import {DataModule} from "../data/data.module";

@NgModule({
  providers: [
    // ProfileGuard
  ],
  declarations: [
    ProfileComponent
  ],
  exports: [
    ProfileComponent,
  ],
    imports: [
        CommonModule,
        MatToolbarModule,
        ProfileRoutingModule,
        MessageModule,
        MessagesModule,
        HttpClientModule,
        MenubarModule,
        SettingsModule,
        AvatarModule,
        DropdownModule,
    ]
})
export class ProfileModule { }
