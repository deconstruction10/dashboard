import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {fromEvent} from "rxjs";
import {Token} from "../../../../auth/token";
import {AuthService} from "@auth0/auth0-angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  mediumRegex: string | undefined;
  mobileValue: string | undefined;
  loginForm!: FormGroup;
  @ViewChild('usernameInput', {static: false}) usernameInput!: ElementRef;
  @ViewChild('emailInput', {static: false}) emailInput!: ElementRef;
  @ViewChild('passwordInput', {static: false}) passwordInput!: ElementRef;
  @ViewChild('firstnameInput', {static: false}) firstnameInput!: ElementRef;
  @ViewChild('lastnameInput', {static: false}) lastnameInput!: ElementRef;
  @ViewChild('mobileInput', {static: false}) mobileInput!: ElementRef;
  @ViewChild('signInBtn', {static: false}) signUpBtn!: ElementRef;

  constructor(private readonly auth: AuthService,
              private readonly fb: FormBuilder,
              ) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group(
      {
        username: new FormControl('',
          Validators.compose(
            [
              Validators.required
            ]
          )),
        email: new FormControl('',
          Validators.compose(
            [
              Validators.minLength(6),
              Validators.email,
              Validators.required
            ]
          )),
        password:
          new FormControl('',
            Validators.compose(
              [
                Validators.minLength(6),
                Validators.required
              ]
            )),
        firstname: new FormControl('',
          Validators.compose(
            [
              Validators.minLength(12),
              Validators.required
            ]
          )),
        lastname: new FormControl('',
          Validators.compose(
            [
              Validators.minLength(12),
              Validators.required
            ],
          )),
        mobile: new FormControl('',
          Validators.compose(
            [
              Validators.minLength(10),
              Validators.pattern('/^(\\+\\d{1,3}[- ]?)?\\d{10}$/'),
              Validators.required
            ]
          ))
      }
    )
  }

  get email() {
    return this.loginForm.get('email');
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get firstname() {
    return this.loginForm.get('firstname');
  }

  get lastname() {
    return this.loginForm.get('lastname');
  }

  get mobile() {
    this.mobile?.valid.valueOf();
    return this.loginForm.get('mobile');
  }

  login() {
    const username = this.loginForm.get('username')?.value;
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    fromEvent(this.signUpBtn.nativeElement, 'click')
    this.auth.loginWithRedirect();

  }

  showResponse($event: any) {

  }
}
