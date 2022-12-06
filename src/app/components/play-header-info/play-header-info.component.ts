import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/share/dialog/dialog.component';
import { IDialogData } from 'src/app/share/interface/dialog.interface';

@Component({
  selector: 'app-play-header-info',
  templateUrl: './play-header-info.component.html',
  styleUrls: ['./play-header-info.component.scss'],
})
export class PlayHeaderInfoComponent implements OnInit {
  @Input() turn: string = '';
  @Input() backupIndex: number = -1;
  @Input() backupLength: number = 0;
  @Input() winned = false;
  @Output() reset: EventEmitter<boolean> = new EventEmitter();
  @Output() next: EventEmitter<boolean> = new EventEmitter();
  @Output() revert: EventEmitter<boolean> = new EventEmitter();

  private dataResetDialog: IDialogData = {
    title: 'Do you want to reset ?',
    message: 'Reset and replay',
    actionYes: 'reset',
  };

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  handleReset() {
    this.reset.emit(true);
  }

  handleNext() {
    this.next.emit(true);
  }

  handleRevert() {
    this.revert.emit(true);
  }

  openDialog(name: string, _width = '300px'): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: _width,
      data: this.dataResetDialog,
    });
    const sub = dialogRef.afterClosed().subscribe((value: string) => {
      if (value && value === name) this.handleReset();
      sub.unsubscribe();
    });
  }
}
