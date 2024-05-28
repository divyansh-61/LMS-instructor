import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ListclickdeletepopupComponent } from '../listclickdeletepopup/listclickdeletepopup.component';
import { MatDialog } from '@angular/material/dialog';
export interface PeriodicElement {
  seller: any;
  orderId: any;
  price: any;
  discount: any;

  Status: any;

  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    seller: {
      img: 'assets/quizzes/indoor-portra.png',
      text: 'admin',
      Text: "admin@demo.com",
    }, orderId: {
      text: 'In-person',
      Text: "1 Product",
    }, price: "100", discount: "80", Status: "Waiting", date: "27 Jun 2022 05:36"
  },

  {
    seller: {
      img: 'assets/quizzes/Mask group.png',
      text: 'Robert Ransdell',
      Text: "instructor@demo.com",
    }, orderId: {
      text: 'In-person',
      Text: "2 Product",
    },
    Status: "Passed",
    price: "100", discount: "80", date: "13 Jul 2021"
  },

  {
    seller: {
      img: 'assets/quizzes/Mask group.png',
      text: 'Robert Ransdell',
      Text: "instructor@demo.com",
    }, orderId: {
      text: 'In-person',
      Text: "2 Product",
    },
    Status: "Failed",
    price: "100", discount: "80", date: "13 Jul 2021"
  },



];
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  displayedColumns: string[] = ['seller', 'orderId', 'price', 'discount', 'Status', 'date'];
  dataSource = ELEMENT_DATA;

  constructor(private router: Router, public dialog: MatDialog) {

  }

  toggleButtonChange(e: any) {
    if (e.checked) {
      this.router.navigate(['/quizzes/resulttoggle'])
    }
  }


  isShowNewPlan: boolean = false;
  toggleNewPlan(){
    this.isShowNewPlan = !this.isShowNewPlan
  }

  deletepopup(): void {

    const newref = this.dialog.open(ListclickdeletepopupComponent, {
      width: '40%'
    })
  }
}
