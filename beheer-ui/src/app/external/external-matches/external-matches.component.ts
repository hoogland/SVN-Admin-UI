import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { SeasonService } from '../../season.service';
import { Season } from '../../season';
import { TeamService } from '../team.service';
import { Team } from '../../team';
import { TeamMatchService } from '../team-match.service';
import { TeamMatch } from '../../team-match';
import { ExternalService } from '../external.service';

@Component({
  selector: 'app-external-matches',
  templateUrl: './external-matches.component.html',
  styleUrls: ['./external-matches.component.scss'],
})
export class ExternalMatchesComponent implements OnInit {
  private parameters: any;
  newMatch = new TeamMatch;

  constructor(
    public seasonService: SeasonService,
    public teamService: TeamService,
    public TeamMatchService: TeamMatchService,
    public externalService: ExternalService,
    public route: ActivatedRoute,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    this.parameters = this.route.params.subscribe(params => {
      this.TeamMatchService.getTeamMatches(+params['seasonId'], +params['teamId']);
      this.newMatch.seizoen = +params['seasonId'];
      this.newMatch.team = +params['teamId'];
    });

  }


  onDateChanged(event: any) {
    if (event.formatted !== '') {
      this.newMatch.datum = event.formatted;
    }
    else {
      this.newMatch.datum = '';
    }
  }

  CreateNewMatch() {
    this.TeamMatchService.createTeamMatch(this.newMatch).then(result => {console.log(result); this.newMatch = new TeamMatch})
  }
}
