import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllValidationFormsComponent } from './all-validation-forms.component';

describe('AllValidationFormsComponent', () => {
  let component: AllValidationFormsComponent;
  let fixture: ComponentFixture<AllValidationFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllValidationFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllValidationFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
