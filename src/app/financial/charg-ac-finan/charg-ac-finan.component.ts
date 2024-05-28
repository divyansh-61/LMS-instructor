import { Component } from '@angular/core';
export interface PeriodicElement {
  // instructor: any;
  Title: any;
  Amount: any;
   Due_Date: any;
  status: any;
  date: string;
  action:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    
     Title: {
      text: 'Qatar National Bank',
      Text: "3 Mar 2022 10:53",
    },
    Amount: "1647726485", Due_Date:"100",  date: "View",
    status: {
      text: "Waiting",
    },
    action:"",
  },

  

];

@Component({
  selector: 'app-charg-ac-finan',
  templateUrl: './charg-ac-finan.component.html',
  styleUrls: ['./charg-ac-finan.component.css']
})
export class ChargAcFinanComponent {
  displayedColumns: string[] = ['Title', 'Amount', 'Due_Date', 'date' , 'status','action'];
  dataSource = ELEMENT_DATA;


}
