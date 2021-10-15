import { Injectable } from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {Observable} from "rxjs";
import {ajaxGetJSON} from "rxjs/internal-compatibility";
import {map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private auth0: AuthService) {}

  registerUser(): Observable<void> {
    return this.auth0.loginWithRedirect({screen_hint: 'signup', });
  };

  loginUser(): Observable<void> {
    return this.auth0.loginWithRedirect({screen_hint: ''});
  };

  checkProfileRoute() {
    return this.auth0.isAuthenticated$;
  }
}
