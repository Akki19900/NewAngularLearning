import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent {
  newLoginForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  loginFunction() {
    console.log(this.newLoginForm.value);
  }
}
