import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeletePopupComponent } from '../delete-popup/delete-popup.component';

@Component({
  selector: 'app-product-btns',
  templateUrl: './product-btns.component.html',
  styleUrls: ['./product-btns.component.css']
})
export class ProductBtnsComponent {

  constructor(public dialog:MatDialog){}

  deletePopup():void{

   const deletePopup=this.dialog.open(DeletePopupComponent,{width:'40%'});
 }


}
