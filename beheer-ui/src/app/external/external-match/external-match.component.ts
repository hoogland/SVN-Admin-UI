import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { TeamMatch } from '../../team-match';
import { TeamMatchService } from '../team-match.service';
import { ExternalService } from '../external.service';

import { MemberService } from '../../members/member.service';


@Component({
  selector: 'app-external-match',
  templateUrl: './external-match.component.html',
  styleUrls: ['./external-match.component.scss']
})
export class ExternalMatchComponent implements OnInit {
  private parameters: any;
  teamMatch: TeamMatch;

  private myDatePickerOptions = {
    firstDayOfWeek: 'su'
  }

  constructor(
    public teamMatchService: TeamMatchService,
    public externalService: ExternalService,
    public route: ActivatedRoute,
    public location: Location,
    public MemberService: MemberService,
    public router: Router
  ) { }

  ngOnInit() {
    this.parameters = this.route.params.subscribe(params => {
      this.teamMatch = this.teamMatchService.getTeamMatch(+params['teamMatchId']);
      this.teamMatchService.getTeamMatchGames(+params['seasonId'], +params['teamId'], +params['teamMatchId']);
      this.MemberService.getPlayers();
    });
  }

  onDateChanged(event: any) {
    if (event.formatted !== '') {
      this.teamMatch.datum = event.formatted;
    }
    else {
      this.teamMatch.datum = '';
    }
  }

  SaveTeamMatch() {
    this.teamMatchService.saveTeamMatch(this.teamMatch).then(result => { console.log(result)})
    this.teamMatchService.saveTeamMatchGames(this.teamMatch).then(result => { console.log(result)})
  }

  DeleteTeamMatch(){
    this.teamMatchService.deleteTeamMatch(this.teamMatch).then(result => {
      console.log(result);
      this.router.navigate(['../../matches'], {relativeTo: this.route});
    })
  }
}
