import { AbstractControl } from "@angular/forms";

export function ValidateEmail(control: AbstractControl): any {
  if (control.value && (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(control.value))) {
    return {invalidEmail: true};
  }
  return null;
}
