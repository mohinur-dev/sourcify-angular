import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufecturearSignupComponent } from './manufecturear-signup.component';

describe('ManufecturearSignupComponent', () => {
  let component: ManufecturearSignupComponent;
  let fixture: ComponentFixture<ManufecturearSignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManufecturearSignupComponent]
    });
    fixture = TestBed.createComponent(ManufecturearSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
