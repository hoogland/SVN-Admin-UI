import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ExternalService {

  private apiUrl = environment.apiUrl;
  private headers = new Headers({ 'Content-Type': 'application/json' });

  classes: any;

  constructor(private http: Http) { 
    this.getExternalClasses();
  }

    getExternalClasses() {
    this.http.get(this.apiUrl + "/data/externalClasses")
      .toPromise()
      .then(response => this.classes = response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
