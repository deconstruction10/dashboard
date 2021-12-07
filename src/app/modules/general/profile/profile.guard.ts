import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {iif, Observable, of} from 'rxjs';
import {AuthenticationService} from "../../../auth/authentication.service";
import {switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class ProfileGuard implements CanActivate {
  constructor(private readonly auth: AuthenticationService, private readonly router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true
    // return this.auth.checkProfileRoute()
    //   .pipe(
    //     switchMap((result: boolean) => {
    //       if (result === true) {
    //         return of(result)
    //       } else {
    //         return of(this.router.createUrlTree(['auth/login']))
    //       }
    //     }),
    //   )
  }
}
