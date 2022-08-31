import { TestBed } from '@angular/core/testing';

import { CreditCardsService } from './credit-cards.service';

describe('GetCreditCardsService', () => {
  let service: CreditCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
