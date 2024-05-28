import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewEducationPopupComponent } from '../new-education-popup/new-education-popup.component';
import { ReqSucessComponent } from '../../basic-info/delete-account/req-sucess/req-sucess.component';

@Component({
  selector: 'app-education-remove-account',
  templateUrl: './education-remove-account.component.html',
  styleUrls: ['./education-remove-account.component.css']
})
export class EducationRemoveAccountComponent {


  constructor(public dialog:MatDialog){}
  successfullpopup():void{
    const remove=this.dialog.closeAll();

    const newref=this.dialog.open(ReqSucessComponent,{
      width: '40%'


    })
  }

  close():void{

    const close=this.dialog.closeAll();

  }
}
