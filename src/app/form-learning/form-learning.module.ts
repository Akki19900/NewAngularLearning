import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrivenFormComponent } from './driven-form/driven-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PractiiceReactiveFormComponent } from './practiice-reactive-form/practiice-reactive-form.component';
import { ReactiveFormValidationComponent } from './reactive-form-validation/reactive-form-validation.component';
import { AllValidationFormsComponent } from './all-validation-forms/all-validation-forms.component';
import { ReactiveFormCustomComponent } from './reactive-form-custom/reactive-form-custom.component';

@NgModule({
  declarations: [
    DrivenFormComponent,
    ReactiveFormComponent,
    PractiiceReactiveFormComponent,
    ReactiveFormValidationComponent,
    AllValidationFormsComponent,
    ReactiveFormCustomComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    DrivenFormComponent,
    ReactiveFormComponent,
    PractiiceReactiveFormComponent,
    ReactiveFormValidationComponent,
    AllValidationFormsComponent,
    ReactiveFormCustomComponent,
  ],
})
export class FormLearningModule {}
