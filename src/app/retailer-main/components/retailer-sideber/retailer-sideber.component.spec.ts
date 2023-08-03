import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerSideberComponent } from './retailer-sideber.component';

describe('RetailerSideberComponent', () => {
  let component: RetailerSideberComponent;
  let fixture: ComponentFixture<RetailerSideberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetailerSideberComponent]
    });
    fixture = TestBed.createComponent(RetailerSideberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
