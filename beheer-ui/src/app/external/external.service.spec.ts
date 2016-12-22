/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExternalService } from './external.service';

describe('ExternalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExternalService]
    });
  });

  it('should ...', inject([ExternalService], (service: ExternalService) => {
    expect(service).toBeTruthy();
  }));
});
