import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormCustomComponent } from './reactive-form-custom.component';

describe('ReactiveFormCustomComponent', () => {
  let component: ReactiveFormCustomComponent;
  let fixture: ComponentFixture<ReactiveFormCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormCustomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
