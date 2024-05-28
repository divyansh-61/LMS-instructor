import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgZone } from '@angular/core';
import { ReqSucessComponent } from './req-sucess/req-sucess.component';



@Component({
  selector: 'app-meetingpopup',
  templateUrl: './req-sucess/req-sucess.component.html',
  styleUrls: ['./req-sucess/req-sucess.component.css']
})
export class DeleteAccountComponent {
  constructor(public dialog:MatDialog){}

  successfullpopup():void{

    const newref=this.dialog.open(ReqSucessComponent,{
      width: '40%'


    })
  }
  remove():void{
    const close=this.dialog.closeAll()
    
    
    this.successfullpopup()
  }

  openPopup_new(): void {
    
    const dialogclose=this.dialog.closeAll()
  }


}









