import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.css'],
})
export class DrivenFormComponent {
  userLogin(item: NgForm) {
    console.log(item);
  }
}
