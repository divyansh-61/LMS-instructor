import { Component } from '@angular/core';
import { NewdeletesuccessComponent } from '../newdeletesuccess/newdeletesuccess.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-addnewdeletpopup',
  templateUrl: './addnewdeletpopup.component.html',
  styleUrls: ['./addnewdeletpopup.component.css']
})
export class AddnewdeletpopupComponent {
  constructor(public dialog: MatDialog) { }


  deletesucesspopup(): void {

    const dialogClose = this.dialog.closeAll();
    const newref = this.dialog.open(NewdeletesuccessComponent, {
      width: '40%'
    })
  }

}
