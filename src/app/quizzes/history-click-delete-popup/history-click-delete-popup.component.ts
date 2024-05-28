import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HistoryClickDeleteSuccesPopupComponent } from 'src/app/notice-board/history-click-delete-succes-popup/history-click-delete-succes-popup.component';

@Component({
  selector: 'app-history-click-delete-popup',
  templateUrl: './history-click-delete-popup.component.html',
  styleUrls: ['./history-click-delete-popup.component.css']
})
export class HistoryClickDeletePopupComponent {

  constructor(public dialog: MatDialog) {}

  
  openPopup_new(): void {
    const dialogclose=this.dialog.closeAll()
    this.sucesspopup()
  }
  openPopup_new2(): void {
    const dialogclose=this.dialog.closeAll()
   
  }
  sucesspopup():void{

    const newref=this.dialog.open(HistoryClickDeleteSuccesPopupComponent,{
      width: '40%'
    })
  }
}
