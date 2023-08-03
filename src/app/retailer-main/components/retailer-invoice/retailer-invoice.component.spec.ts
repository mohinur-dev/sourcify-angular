import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerInvoiceComponent } from './retailer-invoice.component';

describe('RetailerInvoiceComponent', () => {
  let component: RetailerInvoiceComponent;
  let fixture: ComponentFixture<RetailerInvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetailerInvoiceComponent]
    });
    fixture = TestBed.createComponent(RetailerInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
