import { Component, OnInit } from '@angular/core';

import { ExternalService } from './external.service';
import { SeasonService } from '../season.service';
import { Season } from '../season';
import { TeamService } from './team.service';
import { Team } from '../team';

@Component({
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.scss']
})
export class ExternalComponent implements OnInit {

  constructor(
    private seasonService: SeasonService,
    private teamService: TeamService,
    private externalService: ExternalService,
  )
  { }

  ngOnInit() {
  }

}
