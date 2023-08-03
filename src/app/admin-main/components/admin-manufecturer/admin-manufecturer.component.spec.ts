import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManufecturerComponent } from './admin-manufecturer.component';

describe('AdminManufecturerComponent', () => {
  let component: AdminManufecturerComponent;
  let fixture: ComponentFixture<AdminManufecturerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminManufecturerComponent]
    });
    fixture = TestBed.createComponent(AdminManufecturerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
