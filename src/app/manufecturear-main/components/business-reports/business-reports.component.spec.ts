import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessReportsComponent } from './business-reports.component';

describe('BusinessReportsComponent', () => {
  let component: BusinessReportsComponent;
  let fixture: ComponentFixture<BusinessReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessReportsComponent]
    });
    fixture = TestBed.createComponent(BusinessReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
