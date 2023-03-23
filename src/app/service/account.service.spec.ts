import { TestBed } from '@angular/core/testing';

import { AccountService } from './account.service';

describe('AccountService', () => {
  let service: AccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
