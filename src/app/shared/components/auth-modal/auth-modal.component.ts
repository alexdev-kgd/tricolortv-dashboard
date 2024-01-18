import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ValidateEmail } from '@shared/validations/email-validation.service';
import { checkPasswords } from '@shared/validations/password-validation.service';
import { ValidateText } from '@shared/validations/text-validation.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { finalize } from 'rxjs';
import { AuthService } from './auth.service';

@UntilDestroy()
@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.sass'],
})
export class AuthModalComponent {
  public formGroup!: FormGroup;

  public isSaving = false;
  public isLoading = false;

  constructor(
    private dialogRef: MatDialogRef<AuthModalComponent>,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.buildForm();
  }

  ngOnDestroy() {}

  protected validatePasswords() {
    this.formGroup.controls.password.updateValueAndValidity();
    this.formGroup.controls.repeatPassword.updateValueAndValidity();
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      password: [
        '',
        [Validators.required, Validators.minLength(8), ValidateText],
      ],
      repeatPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          ValidateText,
          checkPasswords('password'),
        ],
      ],
      email: ['', [Validators.required, ValidateEmail]],
    });
  }

  public onSubmit(): void {
    this.isLoading = true;
    if (this.formGroup.valid) {
      this.formGroup.disable();
      this.save(this.formGroup.value);
    }
    this.isLoading = false;
  }

  private save(user: any): void {
    this.isSaving = true;

    this.authService
      .logIn(user)
      .pipe(
        finalize(() => {
          this.isSaving = false;
          this.formGroup.enable();
        }),
        untilDestroyed(this)
      )
      .subscribe(() => {
        this.dialogRef.close({ type: 'success', payload: user });
      });
  }

  public closeModal() {
    this.dialogRef.close({ type: 'cancel' });
  }
}
