import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { YespopupComponent } from '../yespopup/yespopup.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  constructor(public dialog:MatDialog){}

  yespopup():void{
    const deletepopup =this.dialog.open(YespopupComponent,{
      width:"50%",
      data:{},
    })
  }
}
