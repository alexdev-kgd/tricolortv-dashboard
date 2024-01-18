import { AbstractControl } from "@angular/forms";

export function ValidateText(control: AbstractControl): any {
  if (control.value && (!/[^\s]/.test(control.value))) {
    return {invalidText: true};
  }
  return null;
}
