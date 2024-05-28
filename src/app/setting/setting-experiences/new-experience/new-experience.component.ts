import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent {
  constructor(public dialog: MatDialog){}

  closeAll():void{
    const close=this.dialog.closeAll()
  }



}
