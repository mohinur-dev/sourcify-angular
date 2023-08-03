import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufecturearSideberComponent } from './manufecturear-sideber.component';

describe('ManufecturearSideberComponent', () => {
  let component: ManufecturearSideberComponent;
  let fixture: ComponentFixture<ManufecturearSideberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManufecturearSideberComponent]
    });
    fixture = TestBed.createComponent(ManufecturearSideberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
