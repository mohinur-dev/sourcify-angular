import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerTotalComponent } from './retailer-total.component';

describe('RetailerTotalComponent', () => {
  let component: RetailerTotalComponent;
  let fixture: ComponentFixture<RetailerTotalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetailerTotalComponent]
    });
    fixture = TestBed.createComponent(RetailerTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
