import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-custom',
  templateUrl: './reactive-form-custom.component.html',
  styleUrls: ['./reactive-form-custom.component.css'],
})
export class ReactiveFormCustomComponent {
  passwordForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.passwordForm = this.formBuilder.group(
      {
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              '^(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
            ),
          ],
        ],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: this.passwordMatchValidator,
      }
    );
  }

  // Custom validator to check if password and confirm password match
  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  submitForm() {
    console.log(this.passwordForm);
  }
}
