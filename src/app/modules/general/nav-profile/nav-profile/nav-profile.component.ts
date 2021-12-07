import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {faUserAstronaut} from "@fortawesome/free-solid-svg-icons";
import {MenuItem, SelectItem} from "primeng/api";
import {fromEvent, iif, interval, of, Subject, Subscription} from "rxjs";
import {map, takeWhile} from "rxjs/operators";
import {AuthenticationService} from "../../../../auth/authentication.service";
import {HttpEventType} from "@angular/common/http";

@Component({
  selector: 'app-nav-profile',
  templateUrl: './nav-profile.component.html',
  styleUrls: ['./nav-profile.component.scss']
})
export class NavProfileComponent implements OnInit {
  showMenu = false;
  items!: MenuItem[];
  user!: HttpEventType.User;
  constructor(private readonly library: FaIconLibrary, private readonly auth: AuthenticationService) {
    this.library.addIcons(faUserAstronaut);
  }

  ngOnInit(): void {
    this.items = [{
      label: 'Profile',
      items: [
        {label: 'Settings', icon: 'pi pi-bars'},
        {label: 'Your Data', icon: 'pi pi-chart-bar'},
        {label: 'Log out', icon: 'pi pi-sign-out'}
      ]
    }]
  }

  showUserMenu() {
    this.showMenu = !this.showMenu;
  }

  // getUser() {
  //  return this.auth.getUser();
  // }
}
