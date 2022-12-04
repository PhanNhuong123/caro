import { Component, OnInit } from '@angular/core';

interface Square {
  value: string | null;
  y: number;
  x: number;
  className: string;
}

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent implements OnInit {
  turn: string | null = 'x';

  square = 20;

  playGround: Square[][] = [];

  caseWin: number = 0;

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
          y: i,
          x: j,
          className: ""
        };
        this.playGround[i].push(square);
      }
    }
  }

  updateSquare(item: Square) {
    item.value = this.turn;
    console.log(item.x, item.y);
    this.checkWinner(item);

    if (this.turn === 'x') return (this.turn = 'o');
    return (this.turn = 'x');
  }

  checkWinner(item: Square) {
   this.checkCase1(item)
   if (this.caseWin === 0) {
    this.checkCase2(item)
   }
   if (this.caseWin === 0) {
    this.checkCase3(item)
   }
   if (this.caseWin === 0) {
    this.checkCase4(item)
   }
      

    switch (this.caseWin) {
      case 1:
        this.setWinValue(this.caseWin);
        break;
      case 2:
        this.setWinValue(this.caseWin);
        break;
      case 3:
        this.setWinValue(this.caseWin);
        break;
      case 4:
        this.setWinValue(this.caseWin);
        break;
      default:
        this.listGroupChecked.length = 0;
        break;
    }
  }

  listGroupChecked: Square[] = [];

  setWinValue(_case: number | undefined) {
    this.listGroupChecked.forEach((item) => {
      console.log(`${item.value}-win-${_case}`);

      item.className = `${item.value}-win-${_case}`;
    });
    this.listGroupChecked.length = 0;
  }

  checkCase1(item: Square) {
    this.listGroupChecked.push(item);
    let end1 = true;
    let end2 = true;
    let x = item.x;
    let y = item.y;
    while (end1 && this.playGround[y - 1] && this.playGround[y - 1][x + 1]) {
      x += 1;
      y -= 1;
      if (this.playGround[y][x].value === item.value) {
        this.listGroupChecked.push(this.playGround[y][x]);
      } else {
        x = item.x;
        y = item.y;
        end1 = false;
      }
    }

    while (end2 && this.playGround[y + 1] && this.playGround[y + 1][x - 1]) {
      x -= 1;
      y += 1;
      if (this.playGround[y][x].value === item.value) {
        this.listGroupChecked.push(this.playGround[y][x]);
      } else {
        end2 = false;
      }
    }

    if (this.listGroupChecked.length >= 5) {
      return (this.caseWin = 1);
    }
    this.listGroupChecked.length = 0;
    return;
  }

  checkCase2(item: Square) {
    this.listGroupChecked.push(item);
    let end1 = true;
    let end2 = true;
    let x = item.x;
    let y = item.y;
    while (end1 && this.playGround[y - 1] && this.playGround[y - 1][x - 1]) {
      x -= 1;
      y -= 1;
      if (this.playGround[y][x].value === item.value) {
        this.listGroupChecked.push(this.playGround[y][x]);
      } else {
        x = item.x;
        y = item.y;
        end1 = false;
      }
    }

    while (end2 && this.playGround[y + 1] && this.playGround[y + 1][x + 1]) {
      x += 1;
      y += 1;
      if (this.playGround[y][x].value === item.value) {
        this.listGroupChecked.push(this.playGround[y][x]);
      } else {
        end2 = false;
      }
    }

    if (this.listGroupChecked.length >= 5) {
      return (this.caseWin = 2);
    }
    this.listGroupChecked.length = 0;
    return;
  }
  checkCase3(item: Square) {
    this.listGroupChecked.push(item);
    let end1 = true;
    let end2 = true;
    let x = item.x;
    let y = item.y;
    while (end1 && this.playGround[y + 1] && this.playGround[y + 1][x]) {
      y += 1;
      if (this.playGround[y][x].value === item.value) {
        this.listGroupChecked.push(this.playGround[y][x]);
      } else {
        x = item.x;
        y = item.y;
        end1 = false;
      }
    }

    while (end2 && this.playGround[y - 1] && this.playGround[y - 1][x]) {
      y -= 1;
      if (this.playGround[y][x].value === item.value) {
        this.listGroupChecked.push(this.playGround[y][x]);
      } else {
        end2 = false;
      }
    }

    if (this.listGroupChecked.length >= 5) {
      return (this.caseWin = 3);
    }
    this.listGroupChecked.length = 0;
    return;
  }
  checkCase4(item: Square) {
    this.listGroupChecked.push(item);
    let end1 = true;
    let end2 = true;
    let x = item.x;
    let y = item.y;
    while (end1 && this.playGround[y] && this.playGround[y][x + 1]) {
      x += 1;
      if (this.playGround[y][x].value === item.value) {
        this.listGroupChecked.push(this.playGround[y][x]);
      } else {
        x = item.x;
        y = item.y;
        end1 = false;
      }
    }

    while (end2 && this.playGround[y] && this.playGround[y][x - 1]) {
      x -= 1;
      if (this.playGround[y][x].value === item.value) {
        this.listGroupChecked.push(this.playGround[y][x]);
      } else {
        end2 = false;
      }
    }

    if (this.listGroupChecked.length >= 5) {
      return (this.caseWin = 4);
    }

    this.listGroupChecked.length = 0;
    return;
  }
}
