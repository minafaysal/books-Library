import { TestBed } from '@angular/core/testing';

import { BookDetailsResolver } from './book-details-resolver.service';

describe('BookDetailsResolverService', () => {
  let service: BookDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookDetailsResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
