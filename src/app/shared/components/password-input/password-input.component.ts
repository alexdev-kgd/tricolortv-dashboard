import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PasswordVisibilityEnum } from '@shared/enums/password-visibility.enum';

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.sass']
})
export class PasswordInputComponent {
  public PasswordVisibilityEnum = PasswordVisibilityEnum;
  public passwordVisibility: string = PasswordVisibilityEnum.PASSWORD;

  @Input() formControl: FormControl;
  @Input() placeholder: string;

  @Output() validatePasswords = new EventEmitter<void>();

  public togglePassVisibility(): void {
    this.passwordVisibility === PasswordVisibilityEnum.TEXT
    ? this.passwordVisibility = PasswordVisibilityEnum.PASSWORD
    : this.passwordVisibility = PasswordVisibilityEnum.TEXT;
  }
}
