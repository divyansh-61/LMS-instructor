import { Component } from '@angular/core';

export interface PeriodicElement {
  
  Quiz: any;
  Grade: any;
   Average: any;
  Generatedcertificates: any;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    
     Quiz: {
      text: 'Midterm Quiz',
      Text: "Excel from Beginner to Advanced",
    },
    Grade: 60, Average:80,  date: "10 Jul 2021",
    Generatedcertificates:1,
  },

  {
   
     Quiz: {
      text: 'Final Quiz',
      Text: "Learn Linux in 5 Days",
    },
    Grade: 70, Average:"-33",  date: "10 Jul 2021",
    Generatedcertificates: 1,
  },

  {
    
  Quiz: {
      text: 'Entrance Quiz',
      Text: "New Learning Page",
    }, Grade: 75, Average: "+1.50",
    date: "10 Jul 2021",
     Generatedcertificates: 0,
  },




];

@Component({
  selector: 'app-certificates-list',
  templateUrl: './certificates-list.component.html',
  styleUrls: ['./certificates-list.component.css']
})
export class CertificatesListComponent {
  selected="All";
  displayedColumns: string[] = ['Quiz', 'Grade', 'Average',  'Generatedcertificates' ,'date' ];
  dataSource = ELEMENT_DATA;
}
