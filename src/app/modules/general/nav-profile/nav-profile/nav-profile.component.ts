import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {faUserAstronaut} from "@fortawesome/free-solid-svg-icons";
import {MenuItem, SelectItem} from "primeng/api";
import {fromEvent, iif, of, Subject, Subscription} from "rxjs";
import {map, takeWhile} from "rxjs/operators";

@Component({
  selector: 'app-nav-profile',
  templateUrl: './nav-profile.component.html',
  styleUrls: ['./nav-profile.component.scss']
})
export class NavProfileComponent implements OnInit {
  showMenu = false;
  items!: MenuItem[];
  countries: any;
  constructor(private readonly library: FaIconLibrary) {
    this.library.addIcons(faUserAstronaut);
    this.countries = [
      {name: 'Australia', code: 'AU'},
      {name: 'Brazil', code: 'BR'},
      {name: 'China', code: 'CN'},
      {name: 'Egypt', code: 'EG'},
      {name: 'France', code: 'FR'},
      {name: 'Germany', code: 'DE'},
      {name: 'India', code: 'IN'},
      {name: 'Japan', code: 'JP'},
      {name: 'Spain', code: 'ES'},
      {name: 'United States', code: 'US'}
    ];
  }

  ngOnInit(): void {
    this.items = [{
      label: 'Profile',
      items: [
        {label: 'Settings', icon: 'pi pi-bars', },
        {label: 'Your Data', icon: 'pi pi-chart-bar'},
        {label: 'Log out', icon: 'pi pi-sign-out'}
      ]
    }]
  }

  showUserMenu() {
    this.showMenu = !this.showMenu;
  }
}
