import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerOrderComponent } from './retailer-order.component';

describe('RetailerOrderComponent', () => {
  let component: RetailerOrderComponent;
  let fixture: ComponentFixture<RetailerOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetailerOrderComponent]
    });
    fixture = TestBed.createComponent(RetailerOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
