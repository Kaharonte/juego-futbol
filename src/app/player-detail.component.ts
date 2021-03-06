import 'rxjs/add/operator/switchMap';
import {Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Player } from './player';
import { PlayerService } from './player.service';
@Component({
    moduleId: module.id,
    selector: 'my-player-detail',
    templateUrl: './player-detail.component.html',
    styleUrls: ['./player-detail.component.css'],
})
export class PlayerDetailComponent implements OnInit {
    
    player: Player;

    constructor(
        private playerService: PlayerService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    /*ngOnInit(): void {
        this.route.params.switchMap((params: Params) => this.playerService.getPlayers(+params['id'])).subscribe(player => this.player = player);
    }*/

    ngOnInit(): void {
        this.route.params
        .switchMap((params: Params) => this.playerService.getPlayer(+params['id']))
        .subscribe(player => this.player = player);
    }

    goBack(): void {
        this.location.back();
    }

}