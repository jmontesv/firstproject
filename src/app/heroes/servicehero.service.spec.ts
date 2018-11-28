import { TestBed } from '@angular/core/testing';

import { ServiceheroService } from './servicehero.service';

describe('ServiceheroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceheroService = TestBed.get(ServiceheroService);
    expect(service).toBeTruthy();
  });
});
