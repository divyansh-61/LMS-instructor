import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeletePopupComponent } from '../setting-images/delete-popup/delete-popup.component';

@Component({
  selector: 'app-setting-about',
  templateUrl: './setting-about.component.html',
  styleUrls: ['./setting-about.component.css']
})
export class SettingAboutComponent {

  constructor(public dialog:MatDialog){}




  successfullpopup():void{

    const newref=this.dialog.open(DeletePopupComponent,{
      width: '40%'


    })
  }

}
