import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { DeletePopupComponent } from '../delete-popup/delete-popup.component';

@Component({
  selector: 'app-product-basic-info',
  templateUrl: './product-basic-info.component.html',
  styleUrls: ['./product-basic-info.component.css']
})
export class ProductBasicInfoComponent {

  title = 'angular';
  public Editor = ClassicEditor;

  constructor(public dialog:MatDialog){}

   deletePopup():void{

    const deletePopup=this.dialog.open(DeletePopupComponent,{width:'40%'});
  }

}
