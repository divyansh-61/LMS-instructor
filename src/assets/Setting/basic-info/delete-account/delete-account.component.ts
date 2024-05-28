import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReqSucessComponent } from './req-sucess/req-sucess.component';


@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent {

  constructor(public dialog:MatDialog){}

  successfullpopup():void{

    const newref=this.dialog.open(DeleteAccountComponent,{
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
