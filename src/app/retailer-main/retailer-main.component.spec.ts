import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerMainComponent } from './retailer-main.component';

describe('RetailerMainComponent', () => {
  let component: RetailerMainComponent;
  let fixture: ComponentFixture<RetailerMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetailerMainComponent]
    });
    fixture = TestBed.createComponent(RetailerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
