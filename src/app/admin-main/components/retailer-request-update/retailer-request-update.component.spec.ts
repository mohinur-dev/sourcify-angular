import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerRequestUpdateComponent } from './retailer-request-update.component';

describe('RetailerRequestUpdateComponent', () => {
  let component: RetailerRequestUpdateComponent;
  let fixture: ComponentFixture<RetailerRequestUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetailerRequestUpdateComponent]
    });
    fixture = TestBed.createComponent(RetailerRequestUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
