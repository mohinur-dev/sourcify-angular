import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSideberComponent } from './admin-sideber.component';

describe('AdminSideberComponent', () => {
  let component: AdminSideberComponent;
  let fixture: ComponentFixture<AdminSideberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSideberComponent]
    });
    fixture = TestBed.createComponent(AdminSideberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
