import { Component } from '@angular/core';
// import { PopupMarkAsReleasedComponent } from '../popup-mark-as-released/popup-mark-as-released.component';
import { MatDialog } from '@angular/material/dialog';
import { CoursesDeleteWithoutSuccessComponent } from '../courses-delete-without-success/courses-delete-without-success.component';


@Component({
  selector: 'app-course-mycourse',
  templateUrl: './course-mycourse.component.html',
  styleUrls: ['./course-mycourse.component.css']
})
export class CourseMycourseComponent {
  constructor(public dialog: MatDialog) { }

  Newdelete(): void {
    const deletepopupconst = this.dialog.open(CoursesDeleteWithoutSuccessComponent, {
      width: '50%',
      data: {},
    })
  }

  isShowNewPlan: boolean = false;
  toggleNewPlan(){
    this.isShowNewPlan = !this.isShowNewPlan
  }

}
