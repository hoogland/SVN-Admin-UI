import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Player } from '../Player';

@Injectable()
export class PlayerService {
  private apiUrl = "http://svn.local/API/v1/index.php/members";

  constructor(private http: Http) { }

  getPlayers(): Promise<Player[]> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response => response.json() as Player[])
      .catch(this.handleError);
  }

  getPlayer(id: number): Promise<Player> {
    return this.getPlayers()
      .then(players => players.find(player => player.id === id))
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
