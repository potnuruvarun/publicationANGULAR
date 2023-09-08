import { TestBed } from '@angular/core/testing';

import { PublicationservicesService } from './publicationservices.service';

describe('PublicationservicesService', () => {
  let service: PublicationservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicationservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
