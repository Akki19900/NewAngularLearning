import { Component } from '@angular/core';

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.css'],
})
export class DrivenFormComponent {
  userLogin(item: string) {
    console.log(item);
  }
}
