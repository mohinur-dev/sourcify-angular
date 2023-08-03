import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufecturearFooterComponent } from './manufecturear-footer.component';

describe('ManufecturearFooterComponent', () => {
  let component: ManufecturearFooterComponent;
  let fixture: ComponentFixture<ManufecturearFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManufecturearFooterComponent]
    });
    fixture = TestBed.createComponent(ManufecturearFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
