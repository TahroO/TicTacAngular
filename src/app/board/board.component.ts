import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {SquareComponent} from "../square/square.component";

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    NgIf,
    SquareComponent,
    NgForOf
  ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent implements OnInit{
  squares: any[];
  xIsNext: boolean;
  winner: string;

  constructor() {
    this.squares = [];
    this.xIsNext = true;
    this.winner = '';
  }

  ngOnInit(): void {
    this.newGame();
  }


  protected newGame() {
    this.squares = Array(9).fill(null);
    this.xIsNext = true;
    this.winner = '';
  }

  protected getPlayer() {
    return this.xIsNext ? 'X' : 'O';
  }

  protected makeMove(idx: number) {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.getPlayer());
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
  }
  protected calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] == this.squares[c]
      ){
        return this.squares[a];
      }
    }
    return null;
  }
}
