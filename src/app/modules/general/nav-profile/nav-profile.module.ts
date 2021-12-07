import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavProfileComponent } from './nav-profile/nav-profile.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MenuModule} from "primeng/menu";
import {AvatarModule} from "primeng/avatar";
import {DropdownModule} from "primeng/dropdown";
import {MegaMenuModule} from "primeng/megamenu";
import {SelectButtonModule} from "primeng/selectbutton";
import {SkeletonModule} from "primeng/skeleton";
import {TabMenuModule} from "primeng/tabmenu";

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
    DropdownModule,
    SelectButtonModule,
    TabMenuModule
  ],
  schemas: []
})
export class NavProfileModule { }
