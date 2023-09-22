import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerReportComponent } from './retailer-report.component';

describe('RetailerReportComponent', () => {
  let component: RetailerReportComponent;
  let fixture: ComponentFixture<RetailerReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetailerReportComponent]
    });
    fixture = TestBed.createComponent(RetailerReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
