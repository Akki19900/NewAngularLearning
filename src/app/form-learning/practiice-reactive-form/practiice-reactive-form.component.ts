import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-practiice-reactive-form',
  templateUrl: './practiice-reactive-form.component.html',
  styleUrls: ['./practiice-reactive-form.component.css'],
})
export class PractiiceReactiveFormComponent {
  submitForm = new FormGroup({
    firstName: new FormControl('Akash'),
    lastName: new FormControl('Waghmare'),
    password: new FormControl('12345'),
  });

  loginUser() {
    console.log(this.submitForm.value);
  }
}
