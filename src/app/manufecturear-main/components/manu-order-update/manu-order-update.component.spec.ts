import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuOrderUpdateComponent } from './manu-order-update.component';

describe('ManuOrderUpdateComponent', () => {
  let component: ManuOrderUpdateComponent;
  let fixture: ComponentFixture<ManuOrderUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManuOrderUpdateComponent]
    });
    fixture = TestBed.createComponent(ManuOrderUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
