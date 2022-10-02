import { TestBed } from '@angular/core/testing';

import { LogincustomerService } from './logincustomer.service';

describe('LogincustomerService', () => {
  let service: LogincustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogincustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
