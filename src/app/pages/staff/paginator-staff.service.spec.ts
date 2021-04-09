import { TestBed } from '@angular/core/testing';

import { PaginatorStaffService } from './paginator-staff.service';

describe('PaginatorStaffService', () => {
  let service: PaginatorStaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginatorStaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
