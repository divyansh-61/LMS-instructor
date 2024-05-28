import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SucessDeletePopupMyBundleComponent } from '../sucess-delete-popup-my-bundle/sucess-delete-popup-my-bundle.component';

@Component({
  selector: 'app-delete-popup-my-bundle-course',
  templateUrl: './delete-popup-my-bundle-course.component.html',
  styleUrls: ['./delete-popup-my-bundle-course.component.css']
})
export class DeletePopupMyBundleCourseComponent {
  constructor(public dialog:MatDialog){}

  openPopup_new(): void {
    const dialogclose=this.dialog.closeAll()
    this.yes()
  }
  openPopup_new1(): void {
    const dialogclose=this.dialog.closeAll()
    
  }


  yes(): void {
    const dialogRef = this.dialog.open(SucessDeletePopupMyBundleComponent, {
      width: '40%',
      // Set the desired width
      data: {},
    });
  }
}
