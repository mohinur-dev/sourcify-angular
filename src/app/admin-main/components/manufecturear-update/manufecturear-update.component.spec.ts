import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufecturearUpdateComponent } from './manufecturear-update.component';

describe('ManufecturearUpdateComponent', () => {
  let component: ManufecturearUpdateComponent;
  let fixture: ComponentFixture<ManufecturearUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManufecturearUpdateComponent]
    });
    fixture = TestBed.createComponent(ManufecturearUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
