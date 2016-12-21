import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { SeasonService } from '../../season.service';
import { Season } from '../../season';
import { TeamService } from '../team.service';
import { Team } from '../../team';
import { TeamMatchService } from '../team-match.service';
import { TeamMatch } from '../../team-match';

@Component({
  selector: 'app-external-matches',
  templateUrl: './external-matches.component.html',
  styleUrls: ['./external-matches.component.scss']
})
export class ExternalMatchesComponent implements OnInit {
  private parameters: any;

  constructor(
    private seasonService: SeasonService,
    private teamService: TeamService,
    private TeamMatchService: TeamMatchService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.parameters = this.route.params.subscribe(params => {
      this.TeamMatchService.getTeamMatches(+params['seasonId'], +params['teamId'])
    });
  }
}
