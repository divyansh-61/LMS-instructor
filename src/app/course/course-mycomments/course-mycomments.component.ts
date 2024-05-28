import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { CommentsviewPopupComponent } from '../popup-folder/commentsview-popup/commentsview-popup.component';
import { CommentsEditcommentpopupComponent } from '../popup-folder/comments-editcommentpopup/comments-editcommentpopup.component';
import { CommentsDeletepopupComponent } from '../popup-folder/comments-deletepopup/comments-deletepopup.component';

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
  selector: 'app-course-mycomments',
  templateUrl: './course-mycomments.component.html',
  styleUrls: ['./course-mycomments.component.css']
})






export class CourseMycommentsComponent {
  


  selected1="Hindi";
  
  
  displayedColumns: string[] = [ 'quiz', 'quizGrade', 'status', 'date'];
  dataSource = ELEMENT_DATA;

// popup ts
  constructor(public dialog: MatDialog) {}
  

  viewpopup():void{

    const newref=this.dialog.open(CommentsviewPopupComponent,{
      width: '40%'
    })
  }
  editpopup():void{
    const newd=this.dialog.open(CommentsEditcommentpopupComponent,{
      width: '40%'

     
    })
  }

  deletepopup():void{
    const del=this.dialog.open(CommentsDeletepopupComponent,{
      width: '40%'

    })
  }

  

  


  
  

}
