import { TestBed } from '@angular/core/testing';

import { ManufecturearService } from './manufecturear.service';

describe('ManufecturearService', () => {
  let service: ManufecturearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManufecturearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
