import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufecturearSigninComponent } from './manufecturear-signin.component';

describe('ManufecturearSigninComponent', () => {
  let component: ManufecturearSigninComponent;
  let fixture: ComponentFixture<ManufecturearSigninComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManufecturearSigninComponent]
    });
    fixture = TestBed.createComponent(ManufecturearSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
