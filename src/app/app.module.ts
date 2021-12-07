import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthenticationModule} from "./auth/authentication.module";
import {NavbarRoutingModule} from "./feature/navbar-routing.module";
import {FeatureModule} from "./feature/feature.module";
import {AuthModule} from "@auth0/auth0-angular";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AuthModule,
        NavbarRoutingModule,
        FeatureModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
