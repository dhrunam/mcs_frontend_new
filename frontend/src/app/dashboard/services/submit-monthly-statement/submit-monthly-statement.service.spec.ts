import { TestBed } from '@angular/core/testing';

import { SubmitMonthlyStatementService } from './submit-monthly-statement.service';

describe('SubmitMonthlyStatementService', () => {
  let service: SubmitMonthlyStatementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitMonthlyStatementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
