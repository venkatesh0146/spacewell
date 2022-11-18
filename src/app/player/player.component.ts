import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
  } from '@angular/core';
  import { ScoreUpdateService } from '../../score-update.service';
  
  @Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css'],
  })
  export class PlayerComponent implements OnInit, OnChanges {
   
    constructor(private scoreUpdate: ScoreUpdateService) {}
    @Input('playerName') playerName:any;
    @Input('score') score:any;
    @Output('winner') winner = new EventEmitter();
    @Output('resetBanner') resetBanner = new EventEmitter();
    @Input('reset') reset = false;
    incrementValue = 15;
    playerMap : any = {
        Server : 'Receiver',
        Receiver:'Server'
    }
    
    ngOnInit() {}
    ngOnChanges(simpleChange:SimpleChanges) {
      this.scoreUpdate.reset.subscribe((sub) => {
        if (sub) {
          this.score = 0;
          this.incrementValue = 15;
          for (let key in this.scoreUpdate.playerReached40) {
            this.scoreUpdate.playerReached40[key] = false;
          }
        }
      });
    }
  
    updateScore() {
      if (this.score == 0) {
        this.resetBanner.emit(true);
      }
      if (this.scoreUpdate.playerReached40[this.playerMap[this.playerName]] ==! this.scoreUpdate.playerReached40[this.playerMap[this.playerName]] || this.score < 40) {
        if (this.score == 40) {
          this.winner.emit(this.playerName);
          return;
        }
        if (this.score == 30) {
          this.incrementValue = 10;
          this.scoreUpdate.playerReached40[this.playerName] = true;
        }
        this.score += this.incrementValue;
      } else {
        this.score != 'A'
          ? (this.score = 'A')
          : this.winner.emit(this.playerName);
      }
    }
  }
  