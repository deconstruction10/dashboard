import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingsComponent} from "./settings/settings.component";
import {GeneralComponent} from "./general/general.component";
import {ProfileComponent} from "./profile/profile.component";
import {DataComponent} from "./data/data.component";

const routes: Routes = [
  {path: 'settings', component: SettingsComponent, children: [
      {path: 'general', component: GeneralComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'data', component: DataComponent},
    ]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {
}
