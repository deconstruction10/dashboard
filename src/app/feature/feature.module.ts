import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./navbar/navbar.component";
import {RouterModule} from "@angular/router";
import {MegaMenuModule} from "primeng/megamenu";
import {MenubarModule} from "primeng/menubar";
import {MenuItemContent} from "primeng/menu";
import {ButtonModule} from "primeng/button";
import {HomeModule} from "../modules/general/home/home.module";
import {ProfileModule} from "../modules/general/profile/profile.module";
import {SettingsModule} from "../modules/general/settings/settings.module";
import {AuthenticationModule} from "../auth/authentication.module";

@NgModule({
    declarations: [NavbarComponent],
    exports: [
        NavbarComponent
    ],
  imports: [
    CommonModule,
    RouterModule.forRoot([]),
    MegaMenuModule,
    MenubarModule,
    ButtonModule,
    HomeModule,
    ProfileModule,
    SettingsModule,
    AuthenticationModule
  ]
})
export class FeatureModule { }
