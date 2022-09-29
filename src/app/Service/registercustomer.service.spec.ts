import { TestBed } from '@angular/core/testing';

import { RegistercustomerService } from './registercustomer.service';

describe('RegistercustomerService', () => {
  let service: RegistercustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistercustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
