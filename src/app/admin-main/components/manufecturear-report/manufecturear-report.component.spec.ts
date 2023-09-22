import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufecturearReportComponent } from './manufecturear-report.component';

describe('ManufecturearReportComponent', () => {
  let component: ManufecturearReportComponent;
  let fixture: ComponentFixture<ManufecturearReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManufecturearReportComponent]
    });
    fixture = TestBed.createComponent(ManufecturearReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
