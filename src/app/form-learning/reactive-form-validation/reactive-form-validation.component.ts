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
    password: new FormControl(''),
  });

  userLogin() {
    console.log(this.loginForm.value);
  }
  toggle() {
    this.showPassword = !this.showPassword;
  }

  get firstName() {
    return this.loginForm.get('firstName');
  }
}
