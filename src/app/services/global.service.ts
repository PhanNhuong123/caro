import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Square } from '../share/interface/square.interface';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  public indexBackup = -1;
  public listBackup: string[] = [];

  constructor() {
    this.backup$.subscribe((x) => {
      this.listBackup.push(x);
      this.indexBackup++;
    });

    this.revert$.subscribe(() => {
      if (this.indexBackup >= 0) {
        this.indexBackup--;
      }
    });

    this.next$.subscribe(() => {
      if (this.indexBackup < this.listBackup.length - 1) {
        this.indexBackup++;
      }
    });
  }

  public squareQuantity = 50;
  public squareQuantity$ = new Subject<number>();
  public backup$ = new Subject<string>();
  public revert$ = new Subject<boolean>();
  public next$ = new Subject<boolean>();
  public winned$ = new Subject<boolean>();
}
