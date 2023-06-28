import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrivenFormComponent } from './driven-form/driven-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PractiiceReactiveFormComponent } from './practiice-reactive-form/practiice-reactive-form.component';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';

@NgModule({
  declarations: [
    DrivenFormComponent,
    ReactiveFormComponent,
    PractiiceReactiveFormComponent,
    ReactiveFormValidationComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    DrivenFormComponent,
    ReactiveFormComponent,
    PractiiceReactiveFormComponent,
    ReactiveFormValidationComponent,
  ],
})
export class FormLearningModule {}
