import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ListclickdeletepopupComponent } from '../listclickdeletepopup/listclickdeletepopup.component';

export interface PeriodicElement {
  seller: any;
  orderId: any;
  price: string;
  discount: string;
  tax: string;
  deliveryFee: string;
  totalAmount: string;
  type: string;
  status: any;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    seller: {
      text: 'admin',
      Text: "admin@demo.com",
    }, orderId: {
      text: '7',
      Text: "1 Product",
    }, price: "$20", discount: "$4", tax: "$1", deliveryFee: "$0.00", totalAmount: "$17", type: "Virtual", status: {
      text: "Completed",
    }, date: "27 Jun 2022 05:36"
  },

  {
    seller: {
      text: 'Robert Ransdell',
      Text: "instructor@demo.com",
    }, orderId: {
      text: '6',
      Text: "2 Product",
    }, price: "$50", discount: "$5", tax: "$2.25", deliveryFee: "$5", totalAmount: "$52.25", type: "Physical", status: {
      text: "Shipped",
    }, date: "13 Jul 2021"
  },

  {
    seller: {
      text: 'Ricardo dave',
      Text: "Ricardodave09@hotmail.com",
    }, orderId: {
      text: '1',
      Text: "1 Product",
    }, price: "$5", discount: "-", tax: "$0.25", deliveryFee: "$0.00", totalAmount: "$5.25", type: "Virtual", status: {
      text: "Completed"
    }, date: "13 Jul 2021"
  },

];


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  displayedColumns: string[] = ['seller', 'orderId', 'price', 'discount', 'tax', 'deliveryFee', 'totalAmount', 'type', 'status', 'date'];
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog) {}

  
  deletepopup():void{

    const newref=this.dialog.open(ListclickdeletepopupComponent,{
      width: '40%'
    })
  }
  
}
