import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuccessPopupComponent } from '../success-popup/success-popup.component';
import { DeletePopupComponent } from '../delete-popup/delete-popup.component';


@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.css']
})
export class ProductImagesComponent {

  
  language = "English";
  section1:any
  source1 = "Upload";
  filetype1 = "Video";
  primary = "primary";
  panelOpenState = false;
  selected="All";
  constructor(public dialog: MatDialog) {}



  
  successpopup():void{

    const newref=this.dialog.open(SuccessPopupComponent,{
      width: '40%'
    })
  }
  // deletepopup():void{

  //   const newref=this.dialog.open(DeletePopup,{
  //     width: '40%'
  //   })
  // }

  deletepopup():void{

   const deletePopup=this.dialog.open(DeletePopupComponent,{width:'40%'});
 }


}
