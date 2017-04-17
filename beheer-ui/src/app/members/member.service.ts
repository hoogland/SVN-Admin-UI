import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import 'rxjs/add/operator/toPromise';

import { Player } from '../Player';

@Injectable()
export class MemberService {
  private apiUrl = environment.apiUrl + "/members";
  private headers = new Headers({ 'Content-Type': 'application/json' });
  players: Player[];

  constructor(private http: Http) { }

  getPlayers(forced: boolean = false): Promise<Player[]> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response => this.players = response.json() as Player[])
      .catch(this.handleError);
  }

    getPlayers2(forced: boolean = false): Observable<Player[]> {
    if(!forced && !this.players)
    {
     // return Observable.this.players;
    }

    return this.http.get(this.apiUrl)
      .map((res:Response)  => this.players = res.json() as Player[])
      .catch(this.handleError);
  }

  getPlayer(id: number): Promise<Player> {
    return this.getPlayers()
      .then(players => players.find(player => player.id === id))
  }

  updatePlayer(player: Player): Promise<Player> {
    const url = `${this.apiUrl}/${player.id}`;
    return this.http
      .put(url, JSON.stringify(player), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  createPlayer(player: Player): Promise<Player> {
    return this.http
      .post(this.apiUrl, JSON.stringify(player), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
