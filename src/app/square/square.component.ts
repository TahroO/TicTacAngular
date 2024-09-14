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
  @Input() value: 'X' | 'O';

  constructor() {
    this.value = 'X';
  }
}
