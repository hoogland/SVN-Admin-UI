import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { TeamMatch } from '../../team-match';
import { TeamMatchService } from '../team-match.service';
import { ExternalService } from '../external.service';


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
    private teamMatchService: TeamMatchService,
    private externalService: ExternalService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.parameters = this.route.params.subscribe(params => {
      this.teamMatch = this.teamMatchService.getTeamMatch(+params['teamMatchId']);
      console.log(this.teamMatch);
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
  }

}
