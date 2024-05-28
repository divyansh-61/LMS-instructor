import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddedsuccessfullyComponent } from '../../setting-education/addedsuccessfully/addedsuccessfully.component';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent {

  constructor(public dialog:MatDialog){}

  // successPopup():void{

  //   const close=this.dialog.closeAll();

  //   const newref=this.dialog.open(AddedsuccessfullyComponent,{
  //     width: '40%'


  //   })
  // }

  
  addedSuccessfully():void{

    const close= this.dialog.closeAll();

    const newref=this.dialog.open(AddedsuccessfullyComponent,{
      width: '40%'


    })
  }

  close():void{

    const close=this.dialog.closeAll();

  }

}



