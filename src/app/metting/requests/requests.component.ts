import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ContactStudentPopupComponent } from '../contact-student-popup/contact-student-popup.component';
import { FinishMeetingtPopupComponent } from '../finish-meetingt-popup/finish-meetingt-popup.component';

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
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent {
  displayedColumns: string[] = ['seller', 'orderId', 'price', 'discount', 'tax', 'deliveryFee', 'totalAmount', 'date'];
  dataSource = ELEMENT_DATA;


  constructor(public dialog: MatDialog) { }

  ContactStudentPopup(): void {

    const ContactStudentPopup = this.dialog.open(ContactStudentPopupComponent, {
      width: '40%'
    })
  }
  FinishMeetingtPopup(): void {

    const FinishMeetingtPopup = this.dialog.open(FinishMeetingtPopupComponent, {
      width: '40%'
    })
  }


  isShowNewPlan: boolean = false;
  toggleNewPlan() {
    this.isShowNewPlan = !this.isShowNewPlan
  }


}
