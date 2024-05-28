import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SucessDeletePopupSteprComponent } from '../sucess-delete-popup-stepr/sucess-delete-popup-stepr.component';

@Component({
  selector: 'app-delete-popup-stepr',
  templateUrl: './delete-popup-stepr.component.html',
  styleUrls: ['./delete-popup-stepr.component.css']
})
export class DeletePopupSteprComponent {
  constructor(public dialog:MatDialog){}

  openPopup_new(): void {
    const dialogclose=this.dialog.closeAll()
    this.yes()
  }
  openPopup_new1(): void {
    const dialogclose=this.dialog.closeAll()
    
  }


  yes(): void {
    const dialogRef = this.dialog.open(SucessDeletePopupSteprComponent, {
      width: '40%',
      // Set the desired width
      data: {},
    });
  }
}
