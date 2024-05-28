import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-student-popup',
  templateUrl: './contact-student-popup.component.html',
  styleUrls: ['./contact-student-popup.component.css']
})
export class ContactStudentPopupComponent {

  constructor(public dialog: MatDialog) { }

  closePopUp(): void {
    const dialogclose = this.dialog.closeAll()

  }
}
