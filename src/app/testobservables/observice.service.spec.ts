import { TestBed } from '@angular/core/testing';

import { ObserviceService } from './observice.service';

describe('ObserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObserviceService = TestBed.get(ObserviceService);
    expect(service).toBeTruthy();
  });
});
