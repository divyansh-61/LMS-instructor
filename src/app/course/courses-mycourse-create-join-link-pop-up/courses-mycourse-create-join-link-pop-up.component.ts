import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-courses-mycourse-create-join-link-pop-up',
  templateUrl: './courses-mycourse-create-join-link-pop-up.component.html',
  styleUrls: ['./courses-mycourse-create-join-link-pop-up.component.css']
})

export class CoursesMycourseCreateJoinLinkPopUpComponent {

  language = "English";
  section = "Select a Chapter";

  constructor(public dialog: MatDialog) { }

  closePopUp(): void {
    const dialogclose = this.dialog.closeAll()
  }

}