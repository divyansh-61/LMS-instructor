import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReqSucessComponent } from '../../basic-info/delete-account/req-sucess/req-sucess.component';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.css']
})
export class DeletePopupComponent {

  constructor(public dialog:MatDialog){}

  successfullpopup():void{

    const newref=this.dialog.open(DeletePopupComponent,{
      width: '40%'


    })
  }
  remove():void{
    const close=this.dialog.closeAll()
    
    
    this.successOpen()
  }

  openPopup_new(): void {
    
    const dialogclose=this.dialog.closeAll()
  }
  successOpen() :void {
    const successOne=this.dialog.open(ReqSucessComponent,{width:'40%'})
  }



}
