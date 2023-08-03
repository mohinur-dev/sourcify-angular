import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerUpdateComponent } from './retailer-update.component';

describe('RetailerUpdateComponent', () => {
  let component: RetailerUpdateComponent;
  let fixture: ComponentFixture<RetailerUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetailerUpdateComponent]
    });
    fixture = TestBed.createComponent(RetailerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
