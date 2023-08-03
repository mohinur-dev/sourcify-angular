import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufecturearHeaderComponent } from './manufecturear-header.component';

describe('ManufecturearHeaderComponent', () => {
  let component: ManufecturearHeaderComponent;
  let fixture: ComponentFixture<ManufecturearHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManufecturearHeaderComponent]
    });
    fixture = TestBed.createComponent(ManufecturearHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
