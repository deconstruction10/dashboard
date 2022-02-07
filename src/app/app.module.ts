import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    NavbarRoutingModule,
    FeatureModule,
    AuthModule.forRoot({
      domain: 'plutta.eu.auth0.com',
      clientId: 'a6nLOQkYddONgraorr1H5QOhAqTxoEcs',
    }),
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
