import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ListdeletesuccesspopupComponent } from '../listdeletesuccesspopup/listdeletesuccesspopup.component';

@Component({
  selector: 'app-listclickdeletepopup',
  templateUrl: './listclickdeletepopup.component.html',
  styleUrls: ['./listclickdeletepopup.component.css']
})
export class ListclickdeletepopupComponent {
  constructor(public dialog: MatDialog) { }

  deletesuccesspopup(): void {
    const dialogclose = this.dialog.closeAll()
    const deletepopup = this.dialog.open(ListdeletesuccesspopupComponent, {
      width: "50%",
      data: {},
    })
  }

}
