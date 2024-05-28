import { Component } from '@angular/core';

export interface PeriodicElement {
  Name:any;
  email: any;
  phone: any;
 LiveClasses: any;
 sales: any;
 salesAmount: any;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Name: {
      img: 'assets/instructor/tableimg.png',
      text: 'Robert Ransdell',
      Text: " Verified",
    },
    email: {
      text: '1 Mar 2022',
    
      }, 
    phone: "28 Jun 2022 | 05:09",
    LiveClasses:  "28 Jun 2022 | 05:09",
    sales: "1/1",
    salesAmount:"60",
     date: "Failed"
  },


];

@Component({
  selector: 'app-all-student-assi',
  templateUrl: './all-student-assi.component.html',
  styleUrls: ['./all-student-assi.component.css']
})
export class AllStudentAssiComponent {
  selected1="Hindi";
  selected2="Hindi";
  
  
  displayedColumns: string[] = ['Name','email','phone','LiveClasses','sales','salesAmount', 'date'];
  dataSource = ELEMENT_DATA;
}
