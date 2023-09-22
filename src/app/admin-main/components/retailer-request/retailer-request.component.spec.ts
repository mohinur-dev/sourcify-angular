import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerRequestComponent } from './retailer-request.component';

describe('RetailerRequestComponent', () => {
  let component: RetailerRequestComponent;
  let fixture: ComponentFixture<RetailerRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetailerRequestComponent]
    });
    fixture = TestBed.createComponent(RetailerRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
