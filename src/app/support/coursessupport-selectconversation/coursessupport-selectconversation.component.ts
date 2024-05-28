import { Component } from '@angular/core';

export interface PeriodicElement {
  img: string;
  fileName: string;
  UpdateDate: string;
  Department: string;

  Status: string;
}

const TABLEDATA: PeriodicElement[] = [
  {
    img: 'assets/support/Mask groupsa.png', fileName: 'Problem with quiz', 
    UpdateDate: '4 Jul 2021 | 04:08',  Department: 'Content', Status: 'Closed'
  },
  {
    img: 'assets/support/Mask groupsa.png', fileName: 'Refund Request #64237', 
    UpdateDate: '12 Jul 2021 | 00:17', Department: 'Financial', Status: 'Waiting'
  },

];


@Component({
  selector: 'app-coursessupport-selectconversation',
  templateUrl: './coursessupport-selectconversation.component.html',
  styleUrls: ['./coursessupport-selectconversation.component.css']
})
export class CoursessupportSelectconversationComponent {
 
  displayedColumns: string[] = ['Contact', 'Updated-date', 'Department', 'Status'];
  dataSource = TABLEDATA;
}
