import { TestBed } from '@angular/core/testing';

import { PaginatorCommentsService } from './paginator-comments.service';

describe('PaginatorCommentsService', () => {
  let service: PaginatorCommentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginatorCommentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
