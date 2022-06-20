import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {ButtonModule} from "primeng/button";
import {allIcons, NgxBootstrapIconsModule} from "ngx-bootstrap-icons";

import {TagModule} from "primeng/tag";
import {BarChartModule, NgxChartsModule} from "@swimlane/ngx-charts";

@NgModule({
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ],
  imports: [
    CommonModule,
    ButtonModule,
    NgxBootstrapIconsModule.pick(allIcons),
    TagModule,
    BarChartModule,
    NgxChartsModule
  ],
  providers: []
})
export class HomeModule { }
