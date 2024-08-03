import { TestBed } from '@angular/core/testing';

import { CeosService } from './ceos.service';

describe('CeosService', () => {
  let service: CeosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CeosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
