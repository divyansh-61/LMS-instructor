import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SendNoticePopupComponent } from '../send-notice-popup/send-notice-popup.component';

@Component({
  selector: 'app-history-click-edit',
  templateUrl: './history-click-edit.component.html',
  styleUrls: ['./history-click-edit.component.css']
})
export class HistoryClickEditComponent {
  public Editor = ClassicEditor;
  course = "nlp";
  select = "blue";


  constructor(public dialog: MatDialog) { }


  noticepopup(): void {

    const newref = this.dialog.open(SendNoticePopupComponent, {
      width: '40%'
    })
  }


}
