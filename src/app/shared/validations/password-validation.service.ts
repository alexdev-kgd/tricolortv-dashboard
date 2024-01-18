import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function checkPasswords(password: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value) {
      return control.parent?.get(password)?.value === control.value ? null : { mismatch: true }
    }
    return null;
  }
}
