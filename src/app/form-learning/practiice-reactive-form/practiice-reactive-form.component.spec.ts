import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractiiceReactiveFormComponent } from './practiice-reactive-form.component';

describe('PractiiceReactiveFormComponent', () => {
  let component: PractiiceReactiveFormComponent;
  let fixture: ComponentFixture<PractiiceReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PractiiceReactiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PractiiceReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
