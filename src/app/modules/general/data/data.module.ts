import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import {ForexComponent} from "./forex/forex.component";
import {CryptoComponent} from "./crypto/crypto.component";
import {EconomicComponent} from "./economic/economic.component";
import {TechnicalComponent} from "./technical/technical.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {DataRoutingModule} from "./data-routing.module";
import {TooltipModule} from "primeng/tooltip";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextModule} from "primeng/inputtext";
import {MatInputModule} from "@angular/material/input";
import {MessagesModule} from "primeng/messages";
import {MessageModule} from "primeng/message";
import {MessageService} from "primeng/api";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

@NgModule({
  declarations: [
    EconomicComponent,
    TechnicalComponent,
    CryptoComponent,
    ForexComponent
  ],
  exports: [
    TechnicalComponent
  ],
  imports: [
    CommonModule,
    FusionChartsModule.forRoot({FusionCharts, Charts, FusionTheme}),
    HttpClientModule,
    DataRoutingModule,
    TooltipModule,
    TableModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MessageModule,
    ProgressSpinnerModule,
    MatProgressSpinnerModule
  ],
  providers: [MessageService]
})
export class DataModule { }
