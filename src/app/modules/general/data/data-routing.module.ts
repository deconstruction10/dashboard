import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TechnicalComponent} from "./technical/technical.component";
import {EconomicComponent} from "./economic/economic.component";
import {CryptoComponent} from "./crypto/crypto.component";
import {ForexComponent} from "./forex/forex.component";

const routes: Routes = [
  {path: 'economic', component: EconomicComponent},
  {path: 'technical/:indicator', component: TechnicalComponent},
  {path: 'crypto', component: CryptoComponent},
  {path: 'forex', component: ForexComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataRoutingModule { }
