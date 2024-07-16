import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const repeatPasswordValidator: ValidatorFn = (
    control: AbstractControl): ValidationErrors | null => {
    return control.value.password === control.value.confirmPassword
    ? null
    : { PasswordNoMatch: true };
};
