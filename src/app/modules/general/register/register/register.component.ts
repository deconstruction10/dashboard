import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginComponent} from "../../login/login/login.component";
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {faEyeSlash, faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ViewChild('usernameInput', {static: false}) usernameInput!: ElementRef;
  @ViewChild('emailInput', {static: false}) emailInput!: ElementRef;
  @ViewChild('passwordInput', {static: false}) passwordInput!: ElementRef;
  @ViewChild('termsInput', {static: false}) termsInput!: ElementRef;
  @ViewChild('signUpBtn', {static: false}) signUpBtn!: ElementRef;
  registerForm!: FormGroup;

  withError = false;
  faEnvelopeOpen = faEnvelopeOpen;
  constructor(private dialog: MatDialog,
              private library: FaIconLibrary,
              private fb: FormBuilder) {
    library.addIcons(faEyeSlash, this.faEnvelopeOpen)
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        username: new FormControl('',
          Validators.compose(
            [
              Validators.required
            ]
          )),
        email:  new FormControl('',
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
        terms: new FormControl(false,
          [
            Validators.requiredTrue
          ])
      }
    )
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

  handleTermsInput(event: KeyboardEvent) {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      this.signUpBtn.nativeElement.focus();
    }
  }

  get email() {
    return this.registerForm.get('email');
  }

  get username() {
    return this.registerForm.get('username');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get terms() {
    return this.registerForm.get('terms');
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
    this.dialog.open(LoginComponent);
  }

  registerUser() {
    const username = this.registerForm.get('username')?.value;
    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;
  }

}
