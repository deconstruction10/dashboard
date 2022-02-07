import {Component, OnInit} from '@angular/core';
import {MegaMenuItem} from "primeng/api";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items!: MegaMenuItem[];
  constructor(private readonly auth: AuthService) { }

  ngOnInit(): void {
    this.items = [
      {label: 'Home', icon: 'pi pi-home', routerLink: ['/home']},
      {label: 'Profile', icon: 'pi pi-user', routerLink: ['/profile']},
      {label: 'Language', icon:'pi pi-lang', items: [
          [
            {
              items: [{label: 'ua'}, {label: 'ua', separator: true, routerLink: ['/ua']}]
            },
            {
              items: [{label: 'en'}, {label: 'en', separator: true, routerLink: ['/en']}]
            }
          ],
        ],
      },
      {label: 'Sign In', icon: 'pi pi-sign-in', command: event => this.auth.loginWithRedirect()},
    ]
  }
}
