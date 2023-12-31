import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerFooterComponent } from './retailer-footer.component';

describe('RetailerFooterComponent', () => {
  let component: RetailerFooterComponent;
  let fixture: ComponentFixture<RetailerFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetailerFooterComponent]
    });
    fixture = TestBed.createComponent(RetailerFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
