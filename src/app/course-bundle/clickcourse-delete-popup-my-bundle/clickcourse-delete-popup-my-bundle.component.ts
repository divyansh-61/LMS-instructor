import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClickcourseSucessDeletePopupMyBundleComponent } from '../clickcourse-sucess-delete-popup-my-bundle/clickcourse-sucess-delete-popup-my-bundle.component';
@Component({
  selector: 'app-clickcourse-delete-popup-my-bundle',
  templateUrl: './clickcourse-delete-popup-my-bundle.component.html',
  styleUrls: ['./clickcourse-delete-popup-my-bundle.component.css']
})
export class ClickcourseDeletePopupMyBundleComponent {
  constructor(public dialog:MatDialog){}

  openPopup_new(): void {
    const dialogclose=this.dialog.closeAll()
    this.yes()
  }
  openPopup_new1(): void {
    const dialogclose=this.dialog.closeAll()
    
  }


  yes(): void {
    const dialogRef = this.dialog.open(ClickcourseSucessDeletePopupMyBundleComponent, {
      width: '40%',
      // Set the desired width
      data: {},
    });
  }
}
