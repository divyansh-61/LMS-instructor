import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { ViewpopupComponent } from '../viewpopup/viewpopup.component';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  constructor(public dialog:MatDialog){}

  popup():void{
    const deletepopup =this.dialog.open(PopupComponent,{
      width:"50%",
      data:{},
    })
  }
  viewpopup():void{
    const deletepopup =this.dialog.open(ViewpopupComponent,{
      width:"50%",
      data:{},
    })
  }
}
