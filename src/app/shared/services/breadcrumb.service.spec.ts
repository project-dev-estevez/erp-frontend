import { TestBed } from '@angular/core/testing';

import { BreadcrumbService } from './breadcrumb.service';

describe('SpinnerService', () => {
  let service: BreadcrumbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreadcrumbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
