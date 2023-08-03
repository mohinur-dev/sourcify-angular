import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufecturearHomeComponent } from './manufecturear-home.component';

describe('ManufecturearHomeComponent', () => {
  let component: ManufecturearHomeComponent;
  let fixture: ComponentFixture<ManufecturearHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManufecturearHomeComponent]
    });
    fixture = TestBed.createComponent(ManufecturearHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
