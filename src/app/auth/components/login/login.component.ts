import {Component, OnInit, Output} from '@angular/core';
import {iif, of} from "rxjs";
import {AuthenticationService} from "../../authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 public email: string;
 public password: string;
  constructor(private  readonly auth: AuthenticationService) { }

  ngOnInit(): void {
  }

 async handleClick() {
  const result = await this.auth.login(this.email, this.password);
  console.log(result);
  }
}
