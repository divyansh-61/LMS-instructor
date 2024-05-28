import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(public dialog: MatDialog) { }

  deletePopup(): void {
    const deletepopup = this.dialog.open(DeletePopupComponent, {
      width: '50%',
      data: {},
    })
  }

  isStepper = false;
  isStepperFun(){
    this.isStepper = !this.isStepper
  }


  
}
