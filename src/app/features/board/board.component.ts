import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() word: string = '';
  totalAttempts: number = 5;
  attempts: string[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
