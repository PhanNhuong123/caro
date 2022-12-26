import { Injectable } from '@angular/core';
import { Database } from '@angular/fire/database';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  public indexBackup = 0;
  public listBackup: string[] = [];

  constructor(private dataBase: Database) {
    this.backup$.subscribe((x) => {
      this.listBackup.push(x);
      this.indexBackup++;
    });

    this.revert$.subscribe(() => {
      if (this.indexBackup > 0) {
        this.indexBackup--;
      }
    });

    this.next$.subscribe(() => {
      if (this.indexBackup < this.listBackup.length - 1) {
        this.indexBackup++;
      }
    });
  }
  public roomId = '12345';
  public squareQuantity = 20;
  public squareQuantity$ = new Subject<number>();
  public backup$ = new Subject<string>();
  public revert$ = new Subject<boolean>();
  public next$ = new Subject<boolean>();
  public winned$ = new Subject<boolean>();

  // writeUserData(name: string, turn: string) {
  //   set(ref(this.dataBase, 'room/' + this.roomId), {
  //     username: name,
  //     turn: turn,
  //   });
  // }

  // readValue() {
  //   const starCountRef = ref(this.dataBase, 'room/' + this.roomId);
  //   onValue(starCountRef, (snapshot) => {
  //     const data = snapshot.val();
  //     // console.log(snapshot, data)
  //   });
  // }
}
