import {Component, OnInit} from '@angular/core';
import {MegaMenuItem} from "primeng/api";
import {AuthService} from "@auth0/auth0-angular";
import {AuthenticationService} from "../../auth/authentication.service";
import {MatDialog} from "@angular/material/dialog";
import {LoginComponent} from "../../auth/components/login/login.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items!: MegaMenuItem[];
  private email: string;
  private password: string;
  constructor(private readonly auth: AuthService, private auth1: AuthenticationService, private dialog: MatDialog) { }

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
      {label: 'Sign In', icon: 'pi pi-sign-in', command: event => this.dialog.open(LoginComponent)},
    ]
  }
}
