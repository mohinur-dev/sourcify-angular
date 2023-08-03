import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerSignupComponent } from './retailer-signup.component';

describe('RetailerSignupComponent', () => {
  let component: RetailerSignupComponent;
  let fixture: ComponentFixture<RetailerSignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetailerSignupComponent]
    });
    fixture = TestBed.createComponent(RetailerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
