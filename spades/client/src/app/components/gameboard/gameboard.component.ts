import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Game } from 'src/app/models/game.model';
import { Player } from 'src/app/models/player.model';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('200ms ease-in', style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class GameboardComponent {
  game!: Game;
  currentPlayer!: Player;
  gameIsStarted: boolean = false;
  playerName!: FormGroup;
  
  constructor(
    private storageSvc: StorageService,
    private fb: FormBuilder
    ) { 
      this.initializeGame()
     }

    initializeGame(){
      const username: string | null = this.storageSvc.get('playerName')
      if(username != null){
        this.playerName.get('playerName')?.setValue(username)
        this.gameIsStarted = true;
      }{
        this.playerName = this.fb.group([ 'playerName', [''] ])
      }
    }

    

    setPlayer(){
      if(this.playerName.get('playerName')?.value === ""){
        return
      }
      this.storageSvc.set('playerName', this.playerName.get('playerName')?.value)
      this.gameIsStarted = true;
      this.startGame(this.storageSvc.get('playerName') ?? "")
    }
    private startGame(player: string){
      this.game = new Game([player, 'Player 2', 'Player 3', 'Player 4']);
      this.currentPlayer = this.game.getCurrentPlayer(); 
    }
    playCard(cardIndex: number): void {
      const success = this.game.playCard(this.currentPlayer.id, cardIndex);
      if (success) {
        // Handle successful card play, e.g., updating UI
      } else {
        // Handle error, e.g., not the player's turn
      }
    }

}
