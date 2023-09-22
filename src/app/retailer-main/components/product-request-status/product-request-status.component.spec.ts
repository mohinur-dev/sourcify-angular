import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRequestStatusComponent } from './product-request-status.component';

describe('ProductRequestStatusComponent', () => {
  let component: ProductRequestStatusComponent;
  let fixture: ComponentFixture<ProductRequestStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductRequestStatusComponent]
    });
    fixture = TestBed.createComponent(ProductRequestStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
