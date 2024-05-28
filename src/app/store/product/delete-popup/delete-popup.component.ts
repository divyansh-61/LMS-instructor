import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDeletePopupComponent } from '../success-delete-popup/success-delete-popup.component';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.css']
})
export class DeletePopupComponent {

  
  constructor(public dialog:MatDialog){}

   Success():void{

    const close=this.dialog.closeAll();

    const deletePopup=this.dialog.open(SuccessDeletePopupComponent,{width:'40%'});
  }

}
