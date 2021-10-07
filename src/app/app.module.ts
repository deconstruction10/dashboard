import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthorizationModule} from "./auth/authorization.module";
import {NavbarRoutingModule} from "./feature/navbar-routing.module";
import {FeatureModule} from "./feature/feature.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AuthorizationModule,
        NavbarRoutingModule,
        FeatureModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
