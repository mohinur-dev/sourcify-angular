import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufecturearMainComponent } from './manufecturear-main.component';

describe('ManufecturearMainComponent', () => {
  let component: ManufecturearMainComponent;
  let fixture: ComponentFixture<ManufecturearMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManufecturearMainComponent]
    });
    fixture = TestBed.createComponent(ManufecturearMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
