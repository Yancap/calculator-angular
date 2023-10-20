import { TestBed } from '@angular/core/testing';

import { InputContextService } from './input-context.service';

describe('InputContextService', () => {
  let service: InputContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputContextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
