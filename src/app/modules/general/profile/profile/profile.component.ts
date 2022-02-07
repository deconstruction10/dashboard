import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {MenuItem, SelectItem} from "primeng/api";
import {Avatar} from "primeng/avatar";
import {fromEvent, Observable} from "rxjs";
import {AuthenticationService} from "../../../../auth/authentication.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  items!: MenuItem[];

  constructor(private readonly auth: AuthenticationService) {}
  ngOnInit(): void {
    this.items = [
      {
        label: 'Economic Indicators',
        items: [{
          label: 'Real GDP', routerLink: 'GDP'
        },
          {separator: true},
          {label: 'Real GDP per capita', routerLink: 'GDP-Capita'},
          {separator: true},
          {label: 'Treasury Yield', routerLink: 'Treasury-Yield'},
        ],
      },
      {
        label: 'Technical Indicators', items: [
          {separator: true},
          {label: 'SMA', routerLink: 'data/technical/SMA'},
          {separator: true},
          {label: 'EMA', routerLink: 'data/technical/EMA'},
          {separator: true},
          {label: 'VWAP', routerLink: 'technical/VWAP'},
          {separator: true},
          {label: 'MACD', routerLink: 'technical/MACD'}
        ]
      },
      {label: 'Cryptocurrencies', items: [
          {separator: true},
          {label: 'Exchange Rates', routerLink: 'Exchange-Rates'},
          {separator: true},
          {label: 'Daily', routerLink: 'Daily'},
          {separator: true},
          {label: 'Weekly', routerLink: 'Weekly'},
          {separator: true},
          {label: 'Monthly', routerLink: 'Monthly'}
        ]
      },
        {label: 'Forex', items: [
            {separator: true},
            {label: 'Exchange Rates', routerLink: 'Exchange-Rates'},
            {separator: true},
            {label: 'Intraday', routerLink: 'Intraday'}
        ]
      },
      {label: 'Profile', icon: 'pi pi-user', items: [
          {separator: true},
          {label: 'Settings', routerLink: 'settings', icon: 'pi pi-bars'},
          {separator: true},
          {label: 'Your Data', routerLink: 'data', icon: 'pi pi-chart-bar'},
          {separator: true},
          {label: 'LogOut', icon: 'pi pi-sign-out', command: event => this.auth.logout()}
        ]}
    ]
  }
}
