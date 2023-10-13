import { TestBed } from '@angular/core/testing';

import { PaginatorArticlesService } from './paginator-articles.service';

describe('PaginatorArticlesService', () => {
  let service: PaginatorArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginatorArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
