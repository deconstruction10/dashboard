import {Injectable, NgZone} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {map, mergeMap, Observable, of, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "./user";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {getToken} from "@angular/fire/app-check";
import firebase from "firebase/compat";
import IdTokenResult = firebase.auth.IdTokenResult;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly auth: AuthService,

    private readonly afs: AngularFirestore,
    private readonly afAuth: AngularFireAuth,
    private readonly zone: NgZone
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

  q() {
   const m =  this.afAuth.user.toPromise().then(value => {
     return value?.getIdToken().then(value1 => {
       console.log(value1)
       return value1
     })
   }).then(value2 => {
     return value2
   })
  }

  login(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result)
        this.zone.run(() => {
          this.router.navigate(['profile']);
        });
        this.SetUserData(result.user).then(value => {
          console.log(value)
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
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
