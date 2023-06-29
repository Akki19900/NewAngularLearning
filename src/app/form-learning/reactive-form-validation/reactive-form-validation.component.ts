import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-validation',
  templateUrl: './reactive-form-validation.component.html',
  styleUrls: ['./reactive-form-validation.component.css'],
})
export class ReactiveFormValidationComponent {
  showPassword: boolean = false;
  loginForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl(''),
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [Validators.required, Validators.min(10)]),
  });
  userLogin() {
    console.log(this.loginForm);
  }
  toggle() {
    this.showPassword = !this.showPassword;
  }
  get firstName() {
    return this.loginForm.get('firstName');
  }
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
