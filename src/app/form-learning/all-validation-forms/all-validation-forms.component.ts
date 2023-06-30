import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-all-validation-forms',
  templateUrl: './all-validation-forms.component.html',
  styleUrls: ['./all-validation-forms.component.css'],
})
export class AllValidationFormsComponent {
  // userLoginForm = new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.minLength(8)]),
  //   lastName: new FormControl('', [Validators.required]),
  //   password: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern(
  //       '^(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
  //     ),
  //   ]),
  //   conformPassword: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern(
  //       '^(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
  //     ),
  //   ]),
  // });

  // passwordForm: FormGroup;

  // constructor(private formBuilder: FormBuilder) {
  //   this.passwordForm = this.formBuilder.group({
  //     password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]],
  //     confirmPassword: ['', Validators.required]
  //   }, {
  //     validator: this.passwordMatchValidator
  //   });
  // }

  userLoginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userLoginForm = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(10)]],
        lastName: ['', [Validators.required, Validators.minLength(10)]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(
              '^(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
            ),
          ],
        ],
        conformPassword: ['', Validators.required,],
      },
      { Validator: this.passwordMatchValidator }
    );
  }

  //-----------------------------------------------------

  userLogin() {
    console.log(this.userLoginForm);
  }

  showPassword: boolean = false;

  toggle() {
    this.showPassword = !this.showPassword;
  }

  get name() {
    return this.userLoginForm.get('name');
  }

  get lastName() {
    return this.userLoginForm.get('lastName');
  }

  get password() {
    return this.userLoginForm.get('password');
  }

  get conformPassword() {
    return this.userLoginForm.get('conformPassword');
  }

  // passwordMatchValidator() {
  //   // const password = formGroup.get('password').value;
  //   // const confirmPassword = formGroup.get('confirmPassword').value;
  //   const password = this.password?.get('password')?.value;
  //   const conformPassword = this.password?.get('conformPassword')?.value;

  //   return password === conformPassword ? null : { passwordMismatch: true };
  // }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const conformPassword = formGroup.get('conformPassword')?.value;

    console.log(password);
    console.log(conformPassword);

    return password === conformPassword ? true : { passwordMismatch: true };
  }
}
