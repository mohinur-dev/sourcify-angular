import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufecturerOrderComponent } from './manufecturer-order.component';

describe('ManufecturerOrderComponent', () => {
  let component: ManufecturerOrderComponent;
  let fixture: ComponentFixture<ManufecturerOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManufecturerOrderComponent]
    });
    fixture = TestBed.createComponent(ManufecturerOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
