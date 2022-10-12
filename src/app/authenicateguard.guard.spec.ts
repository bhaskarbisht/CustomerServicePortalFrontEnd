import { TestBed } from '@angular/core/testing';

import { AuthenicateguardGuard } from './authenicateguard.guard';

describe('AuthenicateguardGuard', () => {
  let guard: AuthenicateguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthenicateguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
