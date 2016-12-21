/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TeamMatchService } from './team-match.service';

describe('TeamMatchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamMatchService]
    });
  });

  it('should ...', inject([TeamMatchService], (service: TeamMatchService) => {
    expect(service).toBeTruthy();
  }));
});
