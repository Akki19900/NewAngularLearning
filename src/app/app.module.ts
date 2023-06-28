import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormLearningModule } from './form-learning/form-learning.module';
import { DemoModule } from './demo/demo.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormLearningModule,
    DemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
