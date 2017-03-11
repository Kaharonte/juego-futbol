import { Component, OnInit } from '@angular/core';

import { Player } from './player';
import { PlayerService } from './player.service';

import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent implements OnInit {
  players: Player[];
  selectedPlayer: Player;

  constructor(
    private playerService: PlayerService,
    private router: Router
    ){}

  getPlayers(): void{
    this.playerService.getPlayers().then(lista => this.players = lista);
  }

  ngOnInit(): void {
    this.getPlayers();
  }
  
  onSelect(player: Player): void{
    this.selectedPlayer = player;
  }

  gotoDetail(): void{
    this.router.navigate(['/detail', this.selectedPlayer.id]);
  }

}