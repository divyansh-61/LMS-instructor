import { Component } from '@angular/core';
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
  }



];
@Component({
  selector: 'app-resultlistclicktoggle',
  templateUrl: './resultlistclicktoggle.component.html',
  styleUrls: ['./resultlistclicktoggle.component.css']
})
export class ResultlistclicktoggleComponent {
  displayedColumns: string[] = ['seller', 'orderId', 'price', 'discount', 'Status', 'date'];
  dataSource = ELEMENT_DATA;


  isShowNewPlan: boolean = false;
  toggleNewPlan() {
    this.isShowNewPlan = !this.isShowNewPlan
  }

}
