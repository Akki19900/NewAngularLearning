import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  title = 'running';

  loginForm = new FormGroup({
    firstName: new FormControl('Akash'),
    password: new FormControl(''),
    lastName: new FormControl('Waghmare'),
  });

  userLogin() {
    console.log(this.loginForm.value);
  }
}
