import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {fromEvent, iif, Observable, of} from "rxjs";
import {Message, MessageService} from "primeng/api";
import {AuthorizationService} from "../../../../auth/authorization.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private readonly auth: AuthorizationService, private readonly msg: MessageService, private readonly router: Router) {}
  ngOnInit(): void {

   const infoMsg =  this.msg.add({severity: 'escape', summary: 'login please'});
  }
}
