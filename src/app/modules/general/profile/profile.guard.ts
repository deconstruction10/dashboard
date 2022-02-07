import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {iif, mergeMap, Observable, of} from 'rxjs';
import {AuthenticationService} from "../../../auth/authentication.service";

@Injectable({
  providedIn: 'root'
})

export class ProfileGuard implements CanActivate {
  constructor(private readonly auth: AuthenticationService, private readonly router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return this.auth.checkProfileRoute()
    //   .pipe(
    //     mergeMap((result: boolean) => {
    //       if (result) {
    //         return of(true)
    //       } else {
    //         this.auth.redirectLoginRoute();
    //         return of(false);
    //       }
    //     })
    //   )
    return  true;
  }
}
