import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { Square } from 'src/app/share/interface/square.interface';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent implements OnInit {
  public turn: string = 'x';
  public square: number;
  public playGround: Square[][] = [];
  public caseWin: number = 0;
  public backupLength = 0;
  public backupIndex = -1;
  public winned = false;

  constructor(private _gl: GlobalService) {
    this.square = this._gl.squareQuantity;
  }

  ngOnInit(): void {
    this.createSquare();
    this._gl.winned$.subscribe(x => {
      this.winned = x
    })
  }

  createSquare() {
    for (let i = 0; i < this.square; i++) {
      this.playGround[i] = [];

      for (let j = 0; j < this.square; j++) {
        const square: Square = {
          value: null,
          y: i,
          x: j,
          className: '',
        };
        this.playGround[i].push(square);
      }
    }
  }

  updateSquare(item: Square) {
    item.value = this.turn;
    this.checkWinner(item);

    if (this.turn === 'x') {
      this.turn = 'o';
    } else {
      this.turn = 'x';
    }

    this.handleBackup();
  }

  checkWinner(item: Square) {
    this.checkCase1(item);
    if (this.caseWin === 0) {
      this.checkCase2(item);
    }
    if (this.caseWin === 0) {
      this.checkCase3(item);
    }
    if (this.caseWin === 0) {
      this.checkCase4(item);
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
      item.className = `${item.value}-win-${_case}`;
    });
    this._gl.winned$.next(true)
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

  handleReset(e: boolean) {
    if (e) {
      this.createSquare();
    }
    this._gl.listBackup.length = 0;
    this._gl.indexBackup = 0;
    this._gl.winned$.next(false)
    this.backupIndex = -1;
    this.backupLength = 0;
  }

  handleBackup() {
    if (this._gl.indexBackup !== this._gl.listBackup.length - 1) {
      this._gl.listBackup = this._gl.listBackup.slice(
        0,
        this._gl.indexBackup + 1
      );
    }
    const currentBk = JSON.stringify(this.playGround);
    this._gl.backup$.next(currentBk);
    this.setInfoBackup();
  }

  getBackup(action: 'revert' | 'next') {
    if (action === 'revert') {
      this._gl.revert$.next(true);
    } else {
      this._gl.next$.next(true);
    }

    this.playGround = JSON.parse(this._gl.listBackup[this._gl.indexBackup]);
    this.setInfoBackup();
  }

  setInfoBackup() {
    this.backupIndex = this._gl.indexBackup;
    this.backupLength = this._gl.listBackup.length;
  }
}
