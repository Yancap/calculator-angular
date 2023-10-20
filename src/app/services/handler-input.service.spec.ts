import { TestBed } from '@angular/core/testing';

import { HandlerInputService } from './handler-input.service';

describe('HandlerInputService', () => {
  let service: HandlerInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandlerInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
