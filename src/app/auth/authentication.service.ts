import { Injectable } from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "./user";
import {Token} from "./token";
import {TokenStorageService} from "./token-storage.service";
import {map, tap} from "rxjs/operators";

const LOGIN_AUTH_API = 'http://localhost:3000/auth/login';
const REGISTER_AUTH_API = 'http://localhost:3000/auth/register';
const CONFIRM_PWD_API = 'localhost:3000/auth/confirm-password';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly auth: AuthService,
    private token: TokenStorageService) {}

  login(user: { password: any; email: any; username: any }): Observable<void> {
    return this.auth.loginWithRedirect({login_hint: '', display: 'page'})
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(REGISTER_AUTH_API, user, httpOptions)
      .pipe(
        map((response: User) => response),
        tap((n:User) => this.router.navigate(['/auth/login'], {relativeTo: this.route})),
      );
  };
}
