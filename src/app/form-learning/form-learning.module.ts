import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrivenFormComponent } from './driven-form/driven-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DrivenFormComponent],
  imports: [CommonModule,FormsModule],
  exports: [DrivenFormComponent],
})
export class FormLearningModule {}
