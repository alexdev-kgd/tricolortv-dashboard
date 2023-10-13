import { TestBed } from '@angular/core/testing';

import { PaginatorModulesService } from './paginator-modules.service';

describe('PaginatorModulesService', () => {
  let service: PaginatorModulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginatorModulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
