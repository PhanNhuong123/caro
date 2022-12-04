import { Component, OnInit } from '@angular/core';

interface Square {
  value: 'x' | 'o' | null;
}

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent implements OnInit {
  turn: 'x' | 'o' = 'x';

  square = 20;

  playGround: Square[][] = [];

  constructor() {}

  ngOnInit(): void {
    this.createSquare();
    console.log(this.playGround);
  }

  createSquare() {
    for (let i = 0; i < this.square; i++) {
      this.playGround[i] = [];

      for (let j = 0; j < this.square; j++) {
        const square: Square = {
          value: null,
        };
        this.playGround[i].push(square);
      }
    }
  }

  updateSquare(item: Square) {
    item.value = this.turn;
    if (this.turn === 'x') return (this.turn = 'o');
    return (this.turn = 'x');
  }

  checkWinner() {
    for (let i = 0; i < this.square; i++) {
      for (let j = 0; j < this.square; j++) {
        this.checkItems(i, j);
      }
    }
  }

  listGroupChecked: Square[] = [];

  checkItems(col: number, row: number) {
    const currentItem = this.playGround[col][row];
    const currentValue = currentItem.value;
    if (!currentValue) return;

    this.listGroupChecked.push(currentItem);
  }

  checkCase1(x: number, y: number, item: Square) {
    let end1 = false;
    let end2 = false;
    let col = x;
    let row = y;
    while (end1) {
      col += 1;
      row += 1;
      if (this.playGround[col][row].value === item.value) {
        this.listGroupChecked.push(this.playGround[col][row]);
      } else {
        end1 = true;
      }
    }
    while (end2) {
      col -= 1;
      row -= 1;
      if (this.playGround[col][row].value === item.value) {
        this.listGroupChecked.push(this.playGround[col][row]);
      } else {
        end2 = true;
      }
    }

    
  }
}
