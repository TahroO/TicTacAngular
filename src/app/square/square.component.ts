import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './square.component.html',
  styleUrl: './square.component.css'
})
export class SquareComponent {
  // constructor() {
  //   // setInterval(() => this.rand = Math.random(), 500)
  // }
  // rand = Math.random();
  @Input() value: 'X' | 'O';
  color: string;

  constructor() {
    this.value = 'X';
    this.color = this.getColor();
  }

  protected getColor(){
    if (this.value === 'X') {
      return 'blue';
    }
    if (this.value === 'O') {
      return 'red';
    }
    return 'grey';
  }
}
