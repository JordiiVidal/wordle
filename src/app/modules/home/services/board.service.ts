import { Injectable } from '@angular/core';
import { Board } from '../models/board.model';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  board: Board;
  constructor() {
    this.board = new Board('');
  }

  setBoard(word: string) {
    this.board = new Board(word);
  }
}
