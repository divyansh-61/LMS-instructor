import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';

@Component({
  selector: 'app-setting-images',
  templateUrl: './setting-images.component.html',
  styleUrls: ['./setting-images.component.css']
})
export class SettingImagesComponent {

  constructor(public dialog:MatDialog){}




  successfullpopup():void{

    const newref=this.dialog.open(DeletePopupComponent,{
      width: '40%'


    })
  }



}
