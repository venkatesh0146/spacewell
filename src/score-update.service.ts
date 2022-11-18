import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class ScoreUpdateService {
  constructor() {}

  playerReached40 :any = {
    Receiver: false,
    Server: false,
  };

  reset: BehaviorSubject<boolean> = new BehaviorSubject(false);
}
