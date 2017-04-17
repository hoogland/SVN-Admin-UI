import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../environments/environment';

import 'rxjs/add/operator/toPromise';

import { Season } from './season';

@Injectable()
export class SeasonService {
  private apiUrl = environment.apiUrl + "/seasons";
  private headers = new Headers({ 'Content-Type': 'application/json' });
  
  seasonSelect : any;
  selectedSeason: Season;
  seasons: Season[];

  constructor(private http: Http) {
    this.getSeasons("start");
  }

  getSeasons(source: string) {
    this.http.get(this.apiUrl)
      .toPromise()
      .then(response => this.seasons = response.json() as Season[])
      .catch(this.handleError);
  }

  updateSeason(season: Season): Promise<Season> {
    const url = `${this.apiUrl}/${season.id}`;
    return this.http
      .put(url, JSON.stringify(season), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  createSeason(season: Season): Promise<Season> {
    return this.http
      .post(this.apiUrl, JSON.stringify(season), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  setSelectedSeason(season: Season) {
    console.log("set season" + JSON.stringify(season, null, 4));
    this.selectedSeason = season;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
