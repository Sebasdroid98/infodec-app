import { TestBed } from '@angular/core/testing';

import { ApipropiaService } from './apipropia.service';

describe('ApipropiaService', () => {
  let service: ApipropiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApipropiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
