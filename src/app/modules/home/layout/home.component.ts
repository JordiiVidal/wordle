import { Component, OnInit } from '@angular/core';
import { BoardService } from '../services/board.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  errorInput: boolean = false;
  constructor(private boardService: BoardService) { }

  ngOnInit(): void {
    this.boardService.setWord('Animal');
  }


  clickSend(intent: string) {
    if (!this.errorInput) {
      this.boardService.boardActive.addAttempt(intent);
    }
  }

  checkError(intent: string) {
    if (intent.length != this.boardService.boardActive.word.length) {
      this.errorInput = true;
      return;
    }
    this.errorInput = false;
  }

  clickRestart() {
    this.boardService.boardActive.restart();
  }

}
