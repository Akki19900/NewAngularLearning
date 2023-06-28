import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  title = 'running';

  showPassword: boolean = false;

  loginForm = new FormGroup({
    firstName: new FormControl('Pitter'),
    lastName: new FormControl('Laurance'),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/),
    ]),
  });

  get password() {
    return this.loginForm.get('password');
  }

  // constructor() {
  //   this.passwordForm = new FormGroup({});
  // }

  userLogin() {
    console.log(this.loginForm);
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
