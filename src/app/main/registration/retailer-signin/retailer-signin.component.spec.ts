import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerSigninComponent } from './retailer-signin.component';

describe('RetailerSigninComponent', () => {
  let component: RetailerSigninComponent;
  let fixture: ComponentFixture<RetailerSigninComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetailerSigninComponent]
    });
    fixture = TestBed.createComponent(RetailerSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
