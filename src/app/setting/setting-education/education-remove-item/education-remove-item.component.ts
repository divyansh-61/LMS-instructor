import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RemoveSuccessfullyComponent } from '../../setting-experiences/remove-successfully/remove-successfully.component';
// import { RemoveSuccessfullyComponent } from '../../setting-experiences/remove-successfully/remove-successfully.component';

@Component({
  selector: 'app-education-remove-item',
  templateUrl: './education-remove-item.component.html',
  styleUrls: ['./education-remove-item.component.css']
})
export class EducationRemoveItemComponent {

  constructor(public dialog:MatDialog){}

  close():void{

    const close=this.dialog.closeAll();

  }

  removedSuccessfully():void{
    const close=this.dialog.closeAll();

    const removed=this.dialog.open(RemoveSuccessfullyComponent,{width:
      '60%'})
  }

}
