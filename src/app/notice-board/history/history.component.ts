import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HistoryClickViewComponent } from '../history-click-view/history-click-view.component';
import { HistoryClickDeletePopupComponent } from '../history-click-delete-popup/history-click-delete-popup.component';



export interface PeriodicElement {
  
  quiz: any;
  quizGrade: any;
  status: any;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    quiz: {
      text: 'Become a Product Manager',
      
    }, quizGrade: "View", status: {
      text: "Published",
    }, date: "13 Jul 2021 17:51"
  },

  {
     quiz: {
      text: 'Become a Product Manager',
    
    }, quizGrade: "View",  status: {
      text: "Published",
    }, date: "13 Jul 2021 17:51"
  },

  

];
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  selected1="Hindi";
  
  
  displayedColumns: string[] = [ 'quiz', 'quizGrade', 'status', 'date'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) {}

  
  viewpopup():void{

    const newref=this.dialog.open(HistoryClickViewComponent,{
      width: '40%'
    })
  }
  deletepopup():void{

    const newref=this.dialog.open(HistoryClickDeletePopupComponent,{
      width: '40%'
    })
  }
}
