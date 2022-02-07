import { Injectable } from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {map, mergeMap, Observable, of, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly auth: AuthService
  ) {}

  checkProfileRoute(): Observable<boolean> {
    return this.auth.isAuthenticated$;
  }

  redirectLoginRoute(): Observable<void> {
    return this.auth.loginWithRedirect();
  }

  getUser() {
    return this.auth.user$
      .pipe(
        map(value => value)
      )
  }

  logout() {
    this.auth.logout();
  }

async register() {
  return this.auth.user$
    .pipe(
      mergeMap((async (value) => value)),
      tap((value: any) => value)
    );
  };
}
