import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavProfileComponent } from './nav-profile/nav-profile.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDrawerContainer, MatSidenavModule} from "@angular/material/sidenav";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {PrimeIcons} from "primeng/api";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    NavProfileComponent
  ],
  exports: [
    NavProfileComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class NavProfileModule { }
