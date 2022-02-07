import { Component, OnInit } from '@angular/core';
import {User} from "../../../../auth/user";
import {SelectItem} from "primeng/api";
import {AuthenticationService} from "../../../../auth/authentication.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  users!: User[];

  products2!: User[];

  statuses!: SelectItem[];

  clonedProducts: { [s: string]: User; } = {};

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

}
