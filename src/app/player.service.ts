import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Player } from './player';
//import { LIST_PLAYERS } from './mock-players';

@Injectable()
export class PlayerService {

    private playersUrl = 'api/players';

    constructor(private http: Http) { }

    getPlayers(): Promise<Player[]> {
        return this.http.get(this.playersUrl)
                    .toPromise()
                    .then(response => response.json().data as Player[])
                    .catch(this.handleError);
    } 
    
    getPlayer(id: number): Promise<Player> {
        return this.getPlayers().then(players => players.find(player => player.id === id));
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}