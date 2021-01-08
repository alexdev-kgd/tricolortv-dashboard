import { TestBed } from '@angular/core/testing';

import { PaginatorLabelService } from './paginator-label.service';

describe('PaginatorLabelService', () => {
  let service: PaginatorLabelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginatorLabelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
