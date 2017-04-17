import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/toPromise';

import { Team } from '../team';

@Injectable()
export class TeamService {
  private apiUrl = environment.apiUrl + "/external/teams";
  private headers = new Headers({ 'Content-Type': 'application/json' });

  selectedTeam: Team;
  teams: Team[];
  teamSelect: any;

  constructor(private http: Http) {
    this.getTeams();
  }

  getTeams() {
    this.http.get(this.apiUrl)
      .toPromise()
      .then(response => this.teams = response.json() as Team[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
