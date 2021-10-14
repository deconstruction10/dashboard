import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavProfileComponent } from './nav-profile/nav-profile.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MenuModule} from "primeng/menu";
import {AvatarModule} from "primeng/avatar";
import {DropdownModule} from "primeng/dropdown";

@NgModule({
  declarations: [
    NavProfileComponent
  ],
  exports: [
    NavProfileComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MenuModule,
    AvatarModule,
    DropdownModule
  ]
})
export class NavProfileModule { }
