import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {ButtonModule} from "primeng/button";
import {DataModule} from "../data/data.module";



@NgModule({
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        ButtonModule
    ]
})
export class HomeModule { }
