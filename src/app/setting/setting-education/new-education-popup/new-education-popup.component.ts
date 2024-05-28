import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-new-education-popup',
  templateUrl: './new-education-popup.component.html',
  styleUrls: ['./new-education-popup.component.css']
})
export class NewEducationPopupComponent {
  constructor(public dialog: MatDialog) { }


  closePopUp(): void {

    const newref = this.dialog.closeAll();
  }
}
