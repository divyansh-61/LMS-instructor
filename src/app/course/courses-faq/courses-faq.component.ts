import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HistoryClickDeletePopupComponent } from '../history-click-delete-popup/history-click-delete-popup.component';
import { CoursesItemsAddedSuccessComponent } from '../courses-items-added-success/courses-items-added-success.component';


@Component({
  selector: 'app-courses-faq',
  templateUrl: './courses-faq.component.html',
  styleUrls: ['./courses-faq.component.css']
})
export class CoursesFAQComponent {

  constructor(public dialog: MatDialog) { }

  Newdelete(): void {
    const deletepopupconst = this.dialog.open(HistoryClickDeletePopupComponent, {
      width: '50%',
      data: {},
    })
  }
  

  SavePopup(): void {
    const SavePopup = this.dialog.open(CoursesItemsAddedSuccessComponent, {
      width: '50%',
      data: {},
    })
  }
 
}
