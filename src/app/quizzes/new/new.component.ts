import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { YespopupComponent } from '../quizzepopup/yespopup.component';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  constructor(public dialog:MatDialog){}

  quizzepopup():void{
    const deletepopup =this.dialog.open(YespopupComponent,{
      width:"50%",
      data:{},
    })
  }
}
