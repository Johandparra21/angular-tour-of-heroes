import { TestBed } from '@angular/core/testing';

import { MessajeService } from './message.service';

describe('MessajeService', () => {
  let service: MessajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
