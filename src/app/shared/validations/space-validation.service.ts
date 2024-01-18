import { AbstractControl } from "@angular/forms";

export function ValidateSpaces(control: AbstractControl): any {
  if (control.value && (/[ \t]/.test(control.value))) {
    return {hasSpaces: true};
  }
  return null;
}
