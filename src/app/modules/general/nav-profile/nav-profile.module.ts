import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavProfileComponent } from './nav-profile/nav-profile.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MenuModule} from "primeng/menu";
import {AvatarModule} from "primeng/avatar";
import {DropdownModule} from "primeng/dropdown";
import {MegaMenuModule} from "primeng/megamenu";
import {SelectButtonModule} from "primeng/selectbutton";

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
    SelectButtonModule
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class NavProfileModule { }
