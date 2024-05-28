import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GeneratedpopupComponent } from './generatedpopup/generatedpopup.component';
import { ContentpopupComponent } from './contentpopup/contentpopup.component';
export interface PeriodicElement {
  instructor: any;
  quiz: any;
  quizGrade: any;
  date: any;
  language:any;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {
    instructor: {
     
      text: 'image',
      
    }, quiz: {
      text: 'Genrate Image',
    }, quizGrade: 'Solar Energy',
     date: "English",
     language:"17 September 2023 05:54"
  },
];

@Component({
  selector: 'app-ai-content',
  templateUrl: './ai-content.component.html',
  styleUrls: ['./ai-content.component.css']
})
export class AiContentComponent {
  displayedColumns: string[] = ['instructor', 'quiz', 'quizGrade',  'date' ,'language'];
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog) {}
  
  generatedpopup():void{

    const newref=this.dialog.open(GeneratedpopupComponent,{
      width: '50%'


    })
    
  }
  Contentpopup():void{

    const newref=this.dialog.open(ContentpopupComponent,{
      width: '50%'


    })
    
  }
}
