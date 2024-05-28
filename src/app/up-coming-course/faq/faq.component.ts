import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SavePopupComponent } from '../save-popup/save-popup.component';
import { NewdeleteComponent } from '../newdelete/newdelete.component';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  constructor(public dialog: MatDialog) { }

  Newdelete(): void {
    const deletepopupconst = this.dialog.open(NewdeleteComponent, {
      width: '50%',
      data: {},
    })
  }
  

  SavePopup(): void {
    const SavePopup = this.dialog.open(SavePopupComponent, {
      width: '50%',
      data: {},
    })
  }
}
