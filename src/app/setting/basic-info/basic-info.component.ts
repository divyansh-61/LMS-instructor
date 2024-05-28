import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { ReqSucessComponent } from './delete-account/req-sucess/req-sucess.component';
import { EducationRemoveAccountComponent } from '../setting-education/education-remove-account/education-remove-account.component';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent {
  constructor(public dialog:MatDialog){}




  successfullpopup():void{

    const newref=this.dialog.open(DeleteAccountComponent,{
      width: '40%'


    })
  }
  // remove():void{
  //   const close=this.dialog.closeAll()
    
    
  //   this.successOpen()
  // }

  openPopup_new(): void {
    
    const dialogclose=this.dialog.closeAll()
  }
  successOpen() :void {
    const successOne=this.dialog.open(DeleteAccountComponent  ,{width:'40%'})
  }

  DeleteAccount():void{

    const newref=this.dialog.open(EducationRemoveAccountComponent,{
      width: '40%'


    })
  }

  close():void{
    const close=this.dialog.closeAll();
  }


}
