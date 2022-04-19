import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() word: string = '';
  attempts: number = 5;
  constructor() { }

  ngOnInit(): void {
  }

}
