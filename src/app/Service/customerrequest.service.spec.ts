import { TestBed } from '@angular/core/testing';

import { CustomerrequestService } from './customerrequest.service';

describe('CustomerrequestService', () => {
  let service: CustomerrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
