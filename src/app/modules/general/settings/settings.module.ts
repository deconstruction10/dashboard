import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from "primeng/button";
import { GeneralComponent } from './general/general.component';
import {SettingsRoutingModule} from "./settings-routing.module";
import {RouterModule} from "@angular/router";
import {DividerModule} from "primeng/divider";
import {PasswordModule} from "primeng/password";
import { ProfileComponent } from './profile/profile.component';
import { DataComponent } from './data/data.component';
import {AvatarModule} from "primeng/avatar";
import {TableModule} from "primeng/table";
import {ToastModule} from "primeng/toast";
import {InputMaskModule} from "primeng/inputmask";
import {FileUploadModule} from "primeng/fileupload";
import {TagModule} from "primeng/tag";

@NgModule({
    declarations: [
        SettingsComponent,
        GeneralComponent,
        ProfileComponent,
        DataComponent
    ],
    exports: [
        SettingsComponent
    ],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    SettingsRoutingModule,
    RouterModule,
    DividerModule,
    PasswordModule,
    AvatarModule,
    TableModule,
    ToastModule,
    InputMaskModule,
    FileUploadModule,
    TagModule,
  ]
})
export class SettingsModule { }
