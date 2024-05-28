import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CourseMyccThankyouComponent } from '../popup-folder/course-mycc-thankyou/course-mycc-thankyou.component';
import { CourseMyccReplyComponent } from '../popup-folder/course-mycc-reply/course-mycc-reply.component';
import { CoruseMyccReportComponent } from '../popup-folder/coruse-mycc-report/coruse-mycc-report.component';

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
  selector: 'app-course-mycoursecomponent',
  templateUrl: './course-mycoursecomponent.component.html',
  styleUrls: ['./course-mycoursecomponent.component.css']
})
export class CourseMycoursecomponentComponent {

  selected1="Hindi";
  
  
  displayedColumns: string[] = [ 'quiz', 'quizGrade', 'status', 'date'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) {}

   thankyou():void{
    const view=this.dialog.open(CourseMyccThankyouComponent,{
      width: '40%'


    })
   }
  
   replybox():void{
    const rel=this.dialog.open(CourseMyccReplyComponent,{
      width: '40%'

    })
   }

   reportbox():void{
    const rep=this.dialog.open(CoruseMyccReportComponent,{
      width: '40%'
    })
   }


}
