import { Component } from '@angular/core';
import { AddedsuccessfullyComponent } from '../addedsuccessfully/addedsuccessfully.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-education-popup',
  templateUrl: './edit-education-popup.component.html',
  styleUrls: ['./edit-education-popup.component.css']
})
export class EditEducationPopupComponent {

  constructor(public dialog:MatDialog){}

  successPopup():void{

    const close=this.dialog.closeAll();

    const newref=this.dialog.open(AddedsuccessfullyComponent,{
      width: '40%'


    })
  }

  close():void{

    const close=this.dialog.closeAll();

  }

}
