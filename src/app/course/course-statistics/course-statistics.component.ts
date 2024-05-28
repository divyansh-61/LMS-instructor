import { Component, ViewChild } from '@angular/core';
// import { ChartDataset } from 'chart.js';
import Chart from 'chart.js/auto';

// import { MatDialog } from '@angular/material/dialog';
import {  OnInit } from '@angular/core';
import { SelectEndEvent } from "@progress/kendo-angular-charts";
import { ChartDataset } from 'chart.js';
import { Color } from 'chart.js';
// import { MatDialog } from '@angular/material/dialog';
// import { ActivateofflinestatusComponent } from '../activateofflinestatus/activateofflinestatus.component';
// import { NewPrivateComponent } from '../new-private/new-private.component';

export interface PeriodicElement {
  seller: any;
  orderId: any;
  price: string;
  discount: string;
  tax: string;
  deliveryFee: string;
  totalAmount: string;
  date: string;
}

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ChartComponent
} from "ng-apexcharts";



export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

const gradientColors = [
  ['rgba(255, 99, 132, 0.8)', 'rgba(255, 99, 132, 0.6)', 'rgba(255, 99, 132, 0.4)', 'rgba(255, 99, 132, 0.2)'],
  ['rgba(54, 162, 235, 0.8)', 'rgba(54, 162, 235, 0.6)', 'rgba(54, 162, 235, 0.4)', 'rgba(54, 162, 235, 0.2)']
];



const ELEMENT_DATA: PeriodicElement[] = [
  {
    seller: {
      img: 'assets/Meetingimg/indoor-portra.png',
      text: 'admin',
      Text: "admin@demo.com",
    }, orderId: {
      text: 'In-person',
      Text: "1 Product",
    }, price: "Tue", discount: "15 Mar 2022", tax: "10:30-11:30", deliveryFee: "$0.00", totalAmount: "5", date: "27 Jun 2022 05:36"
  },

  {
    seller: {
      img: 'assets/Meetingimg/Mask group.png',
      text: 'Robert Ransdell',
      Text: "instructor@demo.com",
    }, orderId: {
      text: 'In-person',
      Text: "2 Product",
    }, price: "Tue", discount: "15 Mar 2022", tax: "10:30-11:30", deliveryFee: "$5", totalAmount: "5", date: "13 Jul 2021"
  },

 

];
@Component({
  selector: 'app-course-statistics',
  templateUrl: './course-statistics.component.html',
  styleUrls: ['./course-statistics.component.css'],

})



export class CourseStatisticsComponent  {

  @ViewChild("chart") chart!: ChartComponent ;
  public chartOptions1: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;
  public chartOptions4: Partial<ChartOptions>;
  public chartOptions5: Partial<ChartOptions>;
  // public chartOptions6!: Partial<ChartOptions>;

  constructor() {
    this.chartOptions1 = {
      series: [50],
      chart: {
        type: "donut",
        
        
        // Set multiple colors here
        // colors: ['#F44336', '#E91E63', '#9C27B0']
      },
      
      
      labels: ["Students", "Instructors", "Organizations"],
      
      // colors: ['#F44336', '#E91E63', '#9C27B0'],
      responsive: [
        {
          breakpoint: 2551,
          options: {
            // chart: {
            //   width: 500
            // },
            legend: {
              position: "bottom"
            },
            colors: ['#ff3389', '#FFA6CB', '#FD5E5E']
          }
        }
      ],
      // responsive: [
      //   {
      //     breakpoint: 450,
      //     options: {
      //       chart: {
      //         width: 200
      //       },
      //       legend: {
      //         position: "bottom"
      //       },
      //       colors: ['#ff3389', '#66DA26', '#546E7A']
      //     }
      //   }
      // ]

    };

    this.chartOptions2 = {
      series: [50],
      chart: {
        type: "donut",
       
      },
      
      
      labels: ["Completed", "In Progress", "Not Started"],
            responsive: [
        {
          breakpoint: 2551,
          options: {
            // chart: {
            //   width: 500
            // },
            legend: {
              position: "bottom"
            },
            colors: ['#58A704', '#FD5E5E', '#FECE2F']
          }
        }
      ],
    

    };

    this.chartOptions4 = {
      series: [50,40,40],
      chart: {
        type: "donut",
      },
      
      
      labels: ["Passed", "Pending", "Failed"],
      
      // colors: ['#F44336', '#E91E63', '#9C27B0'],
      responsive: [
        {
          breakpoint: 2551,
          options: {
            // chart: {
            //   width: 500
            // },
            legend: {
              position: "bottom"
            },
            colors: ['#FF3389', '#2E108E', ' #FFA6CB']
          }
        }
      ],
   

    };

    this.chartOptions5 = {
      series: [50,40,40],
      chart: {
        type: "donut",
      },
      
      
      labels: ["Passed", "Pending", "Failed"],
      
      // colors: ['#F44336', '#E91E63', '#9C27B0'],
      responsive: [
        {
          breakpoint: 2551,
          options: {
            // chart: {
            //   width: 500
            // },
            legend: {
              position: "bottom"
            },
            colors: ['#58A704', '#FD5E5E', '#FECE2F']
          }
        }
      ],
   

    };



   

    
  }





  
  isChecked = true;
  Withdrawable= '$995.20';
  AccountBalance = '$995.20';
  AccountBalanceimg="assets/dashboard/AccountBalance.svg";
  
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive:  true,
    barThickness: 10, // Adjust the value as needed
  };

  
  
  public barChartLabels: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];
  
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartPlugins = [];

  // Define static gradient colors


  public barChartData: any[] = [
    { 
      data: [65, 59, 80, 81, 56, 55, 40], 
      label: 'Series A',
      backgroundColor: '#2E108E'
 
    },
    { 
      data: [28, 48, 40, 19, 86, 27, 90], 
      label: 'Series B',
      backgroundColor: '#FF3389' // Specify color for Series B
    },
  ];
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }
  
  public chartHovered(e: any): void {
    console.log(e);
  }
  


// --------------------Graph3 --------------------
chartOptions3 = {
  animationEnabled: true,
  title: {
  // text: "Sales by Department"
  },
  data: [{
  type: "pie",
  startAngle: -90,
  indexLabel: "{name}: {y}",
  yValueFormatString: "#,###.##'%'",
  dataPoints: [
    { y: 14.1, name: "Toys" },
    { y: 28.2, name: "Electronics" },
    { y: 14.4, name: "Groceries" },
    { y: 43.3, name: "Furniture" }
  ]
  }]
}

// constructor(public dialog:MatDialog){}

// Active():void{
//   const deletepopup =this.dialog.open(ActivateofflinestatusComponent,{
//     width:"50%",
//     data:{},
//   })
// }
// NewPrivate():void{
//   const deletepopup =this.dialog.open(NewPrivateComponent,{
//     width:"50%",
//     data:{},
//   })
// }





// Gradiant Bar Chart

  
 isChecked1 = true;
 Withdrawable1= '$995.20';
 AccountBalance1 = '$995.20';
 AccountBalanceimg1="assets/dashboard/AccountBalance.svg";

public barChartOptions1:any  = {
  scaleShowVerticalLines: false,
  responsive:  true,
  barThickness: 20, // Adjust the value as needed
};




public barChartLabels1: string[] = [
  '0-10',
  '10-20',
  '20-30',
  '30-40',
  '40-50',
  '50-60',
  '60-70',
  '70-80',
  '80-90',
  '90-100',
];

public barChartTyp1e: string = 'bar';
public barChartLegend1: boolean = true;

public gradientColors: any = [
  {
    // backgroundColor: 'linear-gradient(180deg, red ,blue)',
    // borderColor: 'rgba(255, 99, 132, 1)',
    // borderWidth: 1
  },
  // {
  //   backgroundColor: 'linear-gradient(180deg, rgba(54, 162, 235, 0.2), rgba(54, 162, 235, 1))',
  //   borderColor: 'rgba(54, 162, 235, 1)',
  //   borderWidth: 1
  // }
];
// public barChartData1: any[] = [
  
//   { 
//     data: [65, 59, 80, 81, 56, 55, 40], 
//     label: 'Series A',
//     // backgroundColor: '#FF3389' // Specify color for Series A
//   },
// ];

public barChartData1: ChartDataset[] = [
  // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: 'rgba(0, 0  , 0 , 0)' },
  // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: 'rgba(0, 0  , 0 , 0)' }

  { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: [
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 99, 132, 0.4)',
    'rgba(255, 99, 132, 0.6)',
    'rgba(255, 99, 132, 0.8)',
    'rgba(255, 99, 132, 1)',
    'rgba(255, 99, 132, 1)',
    'rgba(255, 99, 132, 1)'
] },

];
events:any
public chartClicked1(e: any): void {
  console.log(e);
}

public chartHovered1(e: any): void {
  console.log(e);
}


//  main ts  of bottom bar graph

ngOnInit(): void {
  this.createChartnew();
}

// function defined

public chartnenw: any;
createChartnew() {
  this.chartnenw = new Chart("MyChart", {
    type: 'bar',
    data: {
      labels: ['2017', '2018', '2019', '2020', '2021'],
      datasets: [
        {
          label: "Plates, Sheets, ...",
          data: ["70000", "70000", "70000", "70000", "70000"],
          backgroundColor: (context) => {
            const ctx = context.chart.ctx;
            
            const gradient = ctx.createLinearGradient(0, 0, 0,350); // Define gradient direction (adjust as needed)
            // const chartData = context.chart.data.datasets[0].data;
            // const barHeightPercentage = chartData.map((data1,i) => {console.log(parseInt(data1));
            // })

            
            gradient.addColorStop(0, "rgba(55, 199, 132, 0.7)"); // Start color
            gradient.addColorStop(0.5, "rgba(200, 80, 132, 0.9)"); // Start color 
            gradient.addColorStop(1, "rgba(255, 99, 132, 0.2)"); // End color (transparent)
            return gradient;
          },
        },

      ]
    },
    options: {
      aspectRatio: 2.5,
      plugins: {
        title: {
          display: true,
          text: "Sales by Category (2017-2021)",
          font: {
            size: 18,
            weight: 'bold',
          }
        },
        legend: {
          display: true,
          labels: {
            font: {
              size: 14,
            }
          }
        },
      },
      scales: {
        x: {
          grid: {
            display: false // Hide X-axis grid lines for cleaner look
          },
          ticks: {
            font: {
              size: 14
            }
          }
        },
        y: {
          grid: {
            color: 'rgba(0, 0, 0, 0.1)', // Add a light grey color to Y-axis grid lines
          },
          ticks: {
            font: {
              size: 14
            },
          }
        }
      }
    }
  });
}
// 


displayedColumns: string[] = ['seller', 'orderId', 'price', 'discount', 'tax', 'deliveryFee', 'totalAmount', 'date'];
dataSource = ELEMENT_DATA ;



}