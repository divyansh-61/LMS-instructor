import { Component } from '@angular/core';
import { PopupMarkAsReleasedComponent } from '../popup-mark-as-released/popup-mark-as-released.component';
import { MatDialog } from '@angular/material/dialog';
import { NewdeleteComponent } from '../newdelete/newdelete.component';

@Component({
  selector: 'app-myupcomingcourses',
  templateUrl: './myupcomingcourses.component.html',
  styleUrls: ['./myupcomingcourses.component.css']
})
export class MyupcomingcoursesComponent {
  constructor(public dialog: MatDialog) { }

  PopupMarkAsReleased(): void {
    const PopupMarkAsReleased = this.dialog.open(PopupMarkAsReleasedComponent, {
      width: '50%',
      data: {},
    })
  }
  Newdelete(): void {
    const deletepopupconst = this.dialog.open(NewdeleteComponent, {
      width: '50%',
      data: {},
    })
  }


  isShowNewPlan: boolean = false;
  toggleNewPlan() {
    this.isShowNewPlan = !this.isShowNewPlan
  }


}
