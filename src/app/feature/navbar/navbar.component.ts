import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {RegisterComponent} from "../../modules/general/register/register/register.component";
import {MatDialog} from "@angular/material/dialog";
import {LoginComponent} from "../../modules/general/login/login/login.component";
import {fromEvent} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('loginElement', {static: false})  login: ElementRef | undefined;
  @ViewChild('registerElement', {static: false})  register: ElementRef | undefined;
  constructor(private readonly dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openRegisterDialog() {
    let dialogRef = this.dialog.open(RegisterComponent, {
      width: '600px',
    });
  }

  openSignInDialog() {
    let dialogRef = this.dialog.open(LoginComponent, {
      width: '500px',
    });
  }

}
