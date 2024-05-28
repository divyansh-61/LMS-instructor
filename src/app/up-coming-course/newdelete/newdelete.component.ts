import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConformdeleteComponent } from '../conformdelete/conformdelete.component';

@Component({
  selector: 'app-newdelete',
  templateUrl: './newdelete.component.html',
  styleUrls: ['./newdelete.component.css']
})
export class NewdeleteComponent {
  constructor(public dialog: MatDialog) { }

  Conformdelete(): void {
    const Conformdelete = this.dialog.open(ConformdeleteComponent, {
      width: '50%',
      data: {},
    })
  }
}
