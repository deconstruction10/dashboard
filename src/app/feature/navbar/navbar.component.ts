import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MegaMenuItem} from "primeng/api";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items!: MegaMenuItem[];
  @ViewChild('loginElement', {static: false})  login: ElementRef | undefined;
  @ViewChild('registerElement', {static: false})  register: ElementRef | undefined;
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Home', icon: 'pi pi-home', routerLink: ['/home/home']},
      {label: 'Profile', icon: 'pi pi-user', routerLink: ['/profile/profile']},
      {label: 'Language', icon:'pi pi-lang', items: [
          [
            {
              items: [{label: 'ua',}, {label: 'Video 1.2', separator: true, routerLink: ['/ua']}]
            },
            {
              items: [{label: 'en'}, {label: 'Video 2.2', separator: true, routerLink: ['/en']}]
            }
          ],
        ],
      },
      {label: 'Sign In', icon: 'pi pi-sign-in', routerLink: ['/auth/login']},
      {label: 'Sign Up', routerLink: ['/auth/register']},
    ]
  }
}
