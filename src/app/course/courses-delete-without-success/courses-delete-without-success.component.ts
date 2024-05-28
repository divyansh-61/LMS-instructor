import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-courses-delete-without-success',
  templateUrl: './courses-delete-without-success.component.html',
  styleUrls: ['./courses-delete-without-success.component.css']
})
export class CoursesDeleteWithoutSuccessComponent {

  constructor(public dialog: MatDialog) {}

  
  openPopup_new(): void {
    const dialogclose=this.dialog.closeAll()
  }

}
