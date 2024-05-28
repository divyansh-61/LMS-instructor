import { Component } from '@angular/core';
export interface PeriodicElement {
  Name:any;
  grade: any;
  Average: any;
 Submissions: any;
 Pending: any;
 Passed: any;
 Failed:any;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Name: {
      text: 'Robert Ransdell',
      Text: " Verified",
    },
    grade: {
      text: 60,
    
      }, 
    Average: 60,
    Submissions:  1,
    Pending: 0,
    Passed:"60",
    Failed:1,
     date: "Failed"
  },


];

@Component({
  selector: 'app-student-assi',
  templateUrl: './student-assi.component.html',
  styleUrls: ['./student-assi.component.css']
})
export class StudentAssiComponent {
  selected1="Hindi";
  
  
  displayedColumns: string[] = ['Name','grade','Average','Submissions','Pending','Passed', 'Failed','date'];
  dataSource = ELEMENT_DATA;
}
