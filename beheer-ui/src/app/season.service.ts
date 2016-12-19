import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Season} from './season';

@Injectable()
export class SeasonService {
  private apiUrl = "http://svn.local/API/v1/index.php/";

  constructor(private http: Http) { }

  getSeasons(): Promise<Season[]>{
    return this.http.get(this.apiUrl + "seasons")
      .toPromise()
      .then(response => response.json() as Season[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

}
