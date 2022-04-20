import { Component, Input, OnInit } from '@angular/core';
import { Board } from 'src/app/modules/home/models/board.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() word: string = '';
  board: Board;
  constructor() {
    this.board = new Board(this.word);
  }

  ngOnInit(): void {
    
  }

}
