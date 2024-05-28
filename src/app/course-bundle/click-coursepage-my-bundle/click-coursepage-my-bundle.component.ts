import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClickcourseDeletePopupMyBundleComponent } from '../clickcourse-delete-popup-my-bundle/clickcourse-delete-popup-my-bundle.component';

@Component({
  selector: 'app-click-coursepage-my-bundle',
  templateUrl: './click-coursepage-my-bundle.component.html',
  styleUrls: ['./click-coursepage-my-bundle.component.css']
})
export class ClickCoursepageMyBundleComponent {
  constructor(public dialog:MatDialog){}

  delete(): void {
    const dialogRef = this.dialog.open(ClickcourseDeletePopupMyBundleComponent, {
      width: '40%',
      // Set the desired width
      data: {},
    });
  }
}
