import { Injectable } from '@angular/core';
import { Board } from '../models/board.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  boardActive: Board = new Board();
  constructor() { }

  setWord(word: string) {
    this.boardActive.setWord(word);
  }
}
