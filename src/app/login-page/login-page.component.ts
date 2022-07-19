import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { SnackBarService } from '../shared/snack-bar.service';
import { AuthenticationResponseMessage } from '../enumarators/authentication-response-messages';
import { FireBaseAuthErrorMessage } from '../enumarators/fire-base-sign-in-error-message';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  @Output() changeAuthScreen = new EventEmitter<any>();
  hide = true;
  spinnerIsActive = false;
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private snackBarService: SnackBarService
  ) {}

  userLogin = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  ngOnInit(): void {}

  login() {
    this.spinnerIsActive = true;
    this.authenticationService
      .signIn(this.userLogin.value)
      .then(() => {
        this.snackBarService.successSnackBarDisplay(
          AuthenticationResponseMessage.successful
        );
        this.userLogin.reset();
        this.spinnerIsActive = false;
      })
      .catch((error) => {
        const message = this.authenticationErrorMessageSelection(error.message);

        this.snackBarService.errorSnackBarDisplay(message);

        this.userLogin.reset();
        this.spinnerIsActive = false;
      });
  }

  authenticationErrorMessageSelection(firebaseErrorMessage: string) {
    let message = '';

    switch (firebaseErrorMessage) {
      case FireBaseAuthErrorMessage.UnidentifiedUser:
        message = AuthenticationResponseMessage.userNotMatching;
        break;
      case FireBaseAuthErrorMessage.WrongPassword:
        message = AuthenticationResponseMessage.passwordNotMatching;
        break;
    }

    return message;
  }
  switchAuthScreen() {
    this.changeAuthScreen.emit();
  }
}
