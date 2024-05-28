import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewEducationPopupComponent } from './new-education-popup/new-education-popup.component';
import { EditEducationPopupComponent } from './edit-education-popup/edit-education-popup.component';
import { AddedsuccessfullyComponent } from './addedsuccessfully/addedsuccessfully.component';
import { EducationRemoveItemComponent } from './education-remove-item/education-remove-item.component';
import { DeleteAccountComponent } from 'src/assets/Setting/basic-info/delete-account/delete-account.component';
import { EducationRemoveAccountComponent } from './education-remove-account/education-remove-account.component';
// import { DeleteAccountComponent } from '../basic-info/delete-account/delete-account.component';

@Component({
  selector: 'app-setting-education',
  templateUrl: './setting-education.component.html',
  styleUrls: ['./setting-education.component.css']
})
export class SettingEducationComponent {

  constructor(public dialog:MatDialog){}




  successfullpopup():void{

    const newref=this.dialog.open(NewEducationPopupComponent,{
      width: '40%'


    })
  }
 editEducationPopup():void{

    const newref=this.dialog.open(EditEducationPopupComponent,{
      width: '40%'


    })
  }

  DeleteItem():void{

    const newref=this.dialog.open(EducationRemoveItemComponent,{
      width: '40%'


    })
  }
  DeleteAccount():void{

    const newref=this.dialog.open(EducationRemoveAccountComponent,{
      width: '40%'


    })
  }



}
