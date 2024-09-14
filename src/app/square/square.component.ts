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

  constructor() {
    this.value = 'X';
  }
}
