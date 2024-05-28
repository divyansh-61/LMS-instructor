import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeletesuccesspopupComponent } from '../deletesuccesspopup/deletesuccesspopup.component';


@Component({
  selector: 'app-comments-deletepopup',
  templateUrl: './comments-deletepopup.component.html',
  styleUrls: ['./comments-deletepopup.component.css']
})
export class CommentsDeletepopupComponent {

  constructor(public dialog: MatDialog) { }

  openPopup_new(): void {

    const dialogclose = this.dialog.closeAll()
  }

  deletesucess(): void {
    const sucref = this.dialog.open(DeletesuccesspopupComponent, {
      width: '40%'


    })
  }

  delete_popup(): void {
    const close = this.dialog.closeAll()


    this.deletesucess()
  }


}
