import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrivenFormComponent } from './driven-form/driven-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PractiiceReactiveFormComponent } from './practiice-reactive-form/practiice-reactive-form.component';

@NgModule({
  declarations: [
    DrivenFormComponent,
    ReactiveFormComponent,
    PractiiceReactiveFormComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    DrivenFormComponent,
    ReactiveFormComponent,
    PractiiceReactiveFormComponent,
  ],
})
export class FormLearningModule {}
