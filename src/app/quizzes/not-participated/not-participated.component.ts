import { Component } from '@angular/core';
import { ListclickdeletepopupComponent } from '../listclickdeletepopup/listclickdeletepopup.component';
import { MatDialog } from '@angular/material/dialog';
export interface PeriodicElement {
  seller: any;
  orderId: any;
  price: any;

  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [

  {
    seller: {
      img: 'assets/quizzes/indoor-portra.png',
      text: 'Ricardo dave',
      Text: "Ricardodave09@hotmail.com",
    }, orderId: {
      text: 'Elementary Quiz',
      Text: "Become a Product Manager",
    }, price: "100", date: "27 Jun 2022 05:36"
  }

];
@Component({
  selector: 'app-not-participated',
  templateUrl: './not-participated.component.html',
  styleUrls: ['./not-participated.component.css']
})
export class NotParticipatedComponent {
  displayedColumns: string[] = ['seller', 'orderId', 'price', 'date'];
  dataSource = ELEMENT_DATA;


}
