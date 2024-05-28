import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoursesDeleteWithoutSuccessComponent } from '../courses-delete-without-success/courses-delete-without-success.component';
import { CoursesMycourseCreateJoinLinkPopUpComponent } from '../courses-mycourse-create-join-link-pop-up/courses-mycourse-create-join-link-pop-up.component';


@Component({
  selector: 'app-courses-mycourse-toggle-button',
  templateUrl: './courses-mycourse-toggle-button.component.html',
  styleUrls: ['./courses-mycourse-toggle-button.component.css']
})
export class CoursesMycourseToggleButtonComponent {
  constructor(public dialog: MatDialog) { }

  Newdelete(): void {
    const deletepopupconst = this.dialog.open(CoursesDeleteWithoutSuccessComponent, {
      width: '50%',
      data: {},
    })
  }

  createJoinLink(): void {
    const createJoinLinkPopUp = this.dialog.open(CoursesMycourseCreateJoinLinkPopUpComponent, {
      width: '50%',
      // margin: '',
      data: {},
    })
  }

  isShowNewPlan: boolean = false;
  toggleNewPlan() {
    this.isShowNewPlan = !this.isShowNewPlan
  }

}
