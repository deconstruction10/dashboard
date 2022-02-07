import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {HttpClientModule} from "@angular/common/http";
import {AuthenticationService} from "./authentication.service";

@NgModule({
  declarations: [],
  exports: [],
    imports: [
        SharedModule,
        CommonModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        HttpClientModule
    ],
    providers: [AuthenticationService]
})
export class AuthenticationModule { }
