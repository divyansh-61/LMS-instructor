import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PayoutPopupFinanComponent } from '../payout-popup-finan/payout-popup-finan.component';
@Component({
  selector: 'app-payout-finan',
  templateUrl: './payout-finan.component.html',
  styleUrls: ['./payout-finan.component.css']
})
export class PayoutFinanComponent {
  constructor(public dialog: MatDialog) {}

  
payout():void{

    const newref=this.dialog.open(PayoutPopupFinanComponent,{
      width: '40%'
    })
  }
}
