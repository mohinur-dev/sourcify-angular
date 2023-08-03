import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDefultComponent } from './angular-defult.component';

describe('AngularDefultComponent', () => {
  let component: AngularDefultComponent;
  let fixture: ComponentFixture<AngularDefultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularDefultComponent]
    });
    fixture = TestBed.createComponent(AngularDefultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
