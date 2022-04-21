import { Component, Input, OnInit } from '@angular/core';
import { Board } from 'src/app/modules/home/models/board.model';
import { BoardService } from 'src/app/modules/home/services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  board: Board;
  constructor(private boardService: BoardService) {
    this.board = this.boardService.boardActive;
  }

  ngOnInit(): void {

  }

}
