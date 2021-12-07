import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../../auth/authentication.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private readonly auth: AuthenticationService) {}
  ngOnInit(): void {}
}
