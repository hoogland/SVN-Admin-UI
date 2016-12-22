import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/toPromise';

import { TeamMatch } from '../team-match'

@Injectable()
export class TeamMatchService {
  private apiUrl = environment.apiUrl + "/external"
  private headers = new Headers({ 'Content-Type': 'application/json' });

  matches: TeamMatch[];

  constructor(private http: Http) { }

  getTeamMatches(seasonId: number, teamId: number) {
    this.http.get(this.apiUrl + "/seasons/" + seasonId + "/teams/" + teamId + "/matches")
      .toPromise()
      .then(response => this.matches = response.json() as TeamMatch[])
      .catch(this.handleError);
  }

  createTeamMatch(teamMatch: TeamMatch): Promise<TeamMatch> {
    let apiUrl = this.apiUrl + "/seasons/" + teamMatch.seizoen + "/teams/" + teamMatch.team + "/matches";
    return this.http
      .post(apiUrl, JSON.stringify(teamMatch), { headers: this.headers })
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
