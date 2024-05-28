import { Component } from '@angular/core';
export interface PeriodicElement {
  Name:any;
content: any;
  Price: any;
 Discount: any;
 TotalAmount: any;
 Income: any;
 type:any;
  date: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Name: {
      img: 'assets/instructor/tableimg.png',
      text: 'Robert Ransdell',
      Text: " Verified",
    },
  content: {
      text: 'Painting tools',
      Text: " Id: 1",
    
      }, 
    Price: "$50",
    Discount:  "$5",
    TotalAmount: "$52.25",
    Income:"$45.50",
    type:"Product",
     date: "25 Jun 2022 05:20"
  },

  {
    Name: {
      img: 'assets/instructor/tableimg.png',
      text: 'Robert Ransdell',
      Text: " Verified",
    },
  content: {
      text: 'Painting tools',
      Text: " Id: 1",
    
      }, 
    Price: "$50",
    Discount:  "$5",
    TotalAmount: "$52.25",
    Income:"$45.50",
    type:"Product",
     date: "25 Jun 2022 05:20"
  },

  {
    Name: {
      img: 'assets/instructor/tableimg.png',
      text: 'Robert Ransdell',
      Text: " Verified",
    },
  content: {
      text: 'Painting tools',
      Text: " Id: 1",
    
      }, 
    Price: "$50",
    Discount:  "$5",
    TotalAmount: "$52.25",
    Income:"$45.50",
    type:"Product",
     date: "25 Jun 2022 05:20"
  },

  {
    Name: {
      img: 'assets/instructor/tableimg.png',
      text: 'Robert Ransdell',
      Text: " Verified",
    },
  content: {
      text: 'Painting tools',
      Text: " Id: 1",
    
      }, 
    Price: "$50",
    Discount:  "$5",
    TotalAmount: "$52.25",
    Income:"$45.50",
    type:"Product",
     date: "25 Jun 2022 05:20"
  },

  {
    Name: {
      img: 'assets/instructor/tableimg.png',
      text: 'Robert Ransdell',
      Text: " Verified",
    },
  content: {
      text: 'Painting tools',
      Text: " Id: 1",
    
      }, 
    Price: "$50",
    Discount:  "$5",
    TotalAmount: "$52.25",
    Income:"$45.50",
    type:"Course Bundle",
     date: "25 Jun 2022 05:20"
  },

  {
    Name: {
      img: 'assets/instructor/tableimg.png',
      text: 'Robert Ransdell',
      Text: " Verified",
    },
  content: {
      text: 'Painting tools',
      Text: " Id: 1",
    
      }, 
    Price: "$50",
    Discount:  "$5",
    TotalAmount: "$52.25",
    Income:"$45.50",
    type:"Meeting",
     date: "25 Jun 2022 05:20"
  },

  {
    Name: {
      img: 'assets/instructor/tableimg.png',
      text: 'Robert Ransdell',
      Text: " Verified",
    },
  content: {
      text: 'Painting tools',
      Text: " Id: 1",
    
      }, 
    Price: "$50",
    Discount:  "$5",
    TotalAmount: "$52.25",
    Income:"$45.50",
    type:"Course",
     date: "25 Jun 2022 05:20"
  },

  {
    Name: {
      img: 'assets/instructor/tableimg.png',
      text: 'Robert Ransdell',
      Text: " Verified",
    },
  content: {
      text: 'Painting tools',
      Text: " Id: 1",
    
      }, 
    Price: "$50",
    Discount:  "$5",
    TotalAmount: "$52.25",
    Income:"$45.50",
    type:"Course",
     date: "25 Jun 2022 05:20"
  },

  {
    Name: {
      img: 'assets/instructor/tableimg.png',
      text: 'Robert Ransdell',
      Text: " Verified",
    },
  content: {
      text: 'Painting tools',
      Text: " Id: 1",
    
      }, 
    Price: "$50",
    Discount:  "$5",
    TotalAmount: "$52.25",
    Income:"$45.50",
    type:"Course",
     date: "25 Jun 2022 05:20"
  },

  {
    Name: {
      img: 'assets/instructor/tableimg.png',
      text: 'Robert Ransdell',
      Text: " Verified",
    },
  content: {
      text: 'Painting tools',
      Text: " Id: 1",
    
      }, 
    Price: "$50",
    Discount:  "$5",
    TotalAmount: "$52.25",
    Income:"$45.50",
    type:"Live class",
     date: "25 Jun 2022 05:20"
  },


];



@Component({
  selector: 'app-sales-report-finan',
  templateUrl: './sales-report-finan.component.html',
  styleUrls: ['./sales-report-finan.component.css']
})
export class SalesReportFinanComponent {
selected1="Hindi"

displayedColumns: string[] = ['Name','content','Price','Discount','TotalAmount','Income','type' ,'date'];
dataSource = ELEMENT_DATA;

 

}
