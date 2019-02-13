import { TestBed } from '@angular/core/testing';

import { GetCreditsService } from './get-credits.service';

describe('GetCreditsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetCreditsService = TestBed.get(GetCreditsService);
    expect(service).toBeTruthy();
  });
});
