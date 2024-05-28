import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-addedsuccessfully',
  templateUrl: './addedsuccessfully.component.html',
  styleUrls: ['./addedsuccessfully.component.css']
})
export class AddedsuccessfullyComponent {
  constructor(public dialog:MatDialog){}

  addedSuccessfully():void{

    const newref=this.dialog.open(AddedsuccessfullyComponent,{
      width: '40%'


    })
  }


}
