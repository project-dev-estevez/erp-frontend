import { TestBed } from '@angular/core/testing';

import { EnterprisesService } from '../services/enterprises.service';

describe('EnterprisesService', () => {
  let service: EnterprisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnterprisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();

  });
});
