import { Component, OnChanges } from '@angular/core';
import { ScoreUpdateService } from '../score-update.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnChanges {
  constructor(private scoreUpdate: ScoreUpdateService) {}
  isWinnerReceived = false;
  name = '';
  reset = false;
  playerConfig = [
    {
      type: 'Server',
      score: 0,
    },
    { type: 'Receiver', score: 0 },
  ];

  ngOnChanges() {
    this.scoreUpdate.reset.subscribe((score) => {
      if (score) {
        this.isWinnerReceived = false;
      }
    });
  }

  winnerReceived(winner : string) {
    this.name = winner;
    this.isWinnerReceived = true;
    this.reset = true;
    this.scoreUpdate.reset.next(true);
  }
  resetBanner(reset:boolean) {
    this.isWinnerReceived = !reset;
  }
}
