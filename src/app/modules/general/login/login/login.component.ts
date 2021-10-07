import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {MatDialog} from "@angular/material/dialog";
import {RegisterComponent} from "../../register/register/register.component";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {faEyeSlash, faEnvelope} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('usernameInput', {static: false}) usernameInput!: ElementRef;
  @ViewChild('emailInput', {static: false}) emailInput!: ElementRef;
  @ViewChild('passwordInput', {static: false}) passwordInput!: ElementRef;
  @ViewChild('signUpBtn', {static: false}) signUpBtn!: ElementRef;
  loginForm!: FormGroup;
  withError = false;

  constructor(private readonly auth: AuthService,
              private readonly dialog: MatDialog,
              private readonly fb: FormBuilder,
              private library: FaIconLibrary,) {
    library.addIcons(faEyeSlash, faEnvelope);
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
            ))
      }
    )
  }

  handleUserNameInput(event: KeyboardEvent) {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      this.usernameInput.nativeElement.focus();
    }
  }

  handleEmailInput(event: KeyboardEvent) {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      this.passwordInput.nativeElement.focus();
    }
  }

  handlePasswordInput(event: KeyboardEvent) {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      this.signUpBtn.nativeElement.focus();
    }
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

  showErrorMessage() {
    if (this.email?.errors || this.password?.errors) {
      this.withError = true;
      setTimeout(() => {
        this.withError = false;
      }, 2000);
    }
  }


  openRegisterModal() {
    this.dialog.closeAll();
    this.dialog.open(RegisterComponent);
  }

  login() {
    const username = this.loginForm.get('username')?.value;
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
  }
}
