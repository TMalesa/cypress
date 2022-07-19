import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EventEmitter, Output } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { UserRegistrationResponseMessage } from '../enumarators/user-registration-response-message';
import { SnackBarService } from '../shared/snack-bar.service';
import { PasswordConfirmationValidatorDirective } from '../custom-form-validator/password-confirmation-validator.directive';
import { PasswordValidatorDirective } from '../custom-form-validator/password-validator.directive';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Output() changeAuthScreen = new EventEmitter<any>();
  hide = true;
  spinnerIsActive = false;
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private snackBarService: SnackBarService,
    private passwordConfirmationValidatorDirective: PasswordConfirmationValidatorDirective,
    private passwordValidatorDirective: PasswordValidatorDirective
  ) {}

  userRegistration = this.formBuilder.group(
    {
      email: ['', [Validators.required, Validators.email]],
      abNumber: ['', [Validators.required, Validators.required]],
      confirmPassword: ['', [Validators.required]],
      password: [
        '',

        [Validators.required, this.passwordValidatorDirective.validate],
      ],
    },
    {
      validators: Validators.compose([
        this.passwordConfirmationValidatorDirective.validate,
      ]),
    }
  );

  ngOnInit(): void {}

  register() {
    this.spinnerIsActive = true;
    this.authenticationService
      .register(this.userRegistration.value)
      .then(() => {
        this.snackBarService.successSnackBarDisplay(
          UserRegistrationResponseMessage.successful
        );
        this.userRegistration.reset();
        this.spinnerIsActive = false;
      })
      .catch(() => {
        this.snackBarService.errorSnackBarDisplay(
          UserRegistrationResponseMessage.userAlreadyRegistered
        );
        this.userRegistration.reset();
        this.spinnerIsActive = false;
      });
  }
  switchAuthScreen() {
    this.changeAuthScreen.emit();
  }
}
