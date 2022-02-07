import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../../auth/authentication.service";
import {map} from "rxjs";

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  constructor(private readonly auth: AuthenticationService) { }

  ngOnInit(): void {

  }

  updateUser() {
    return this.auth.getUser()
      .pipe(
        map(user => user?.name)
      )
  }

}
