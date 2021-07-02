import { TestBed } from '@angular/core/testing';

import { PharmaGuard } from './pharma.guard';

describe('PharmaGuard', () => {
  let guard: PharmaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PharmaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
