import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appPasswordConfirmationValidator',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordConfirmationValidatorDirective,
      multi: true,
    },
  ],
})
export class PasswordConfirmationValidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password === null || confirmPassword === null) {
      return null;
    }
    const passwordsMatch = password === confirmPassword;

    return passwordsMatch ? null : { passwordsDontMatch: true };
  }
}
