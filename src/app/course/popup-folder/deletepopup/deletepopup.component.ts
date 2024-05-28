import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeletesuccesspopupComponent } from '../deletesuccesspopup/deletesuccesspopup.component';


@Component({
  selector: 'app-deletepopup',
  templateUrl: './deletepopup.component.html',
  styleUrls: ['./deletepopup.component.css']
})
export class DeletepopupComponent {

  constructor(public dialog:MatDialog){}

   openPopup_new(): void {
    
    const dialogclose=this.dialog.closeAll()
  }

  deletesucess():void{
    const sucref=this.dialog.open(DeletesuccesspopupComponent,{
      width: '40%'


    })
  }

  delete_popup():void{
    const close=this.dialog.closeAll()
    
    
    this.deletesucess()
  }



}
