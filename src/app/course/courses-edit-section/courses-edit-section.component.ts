import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoursesItemsAddedSuccessComponent } from '../courses-items-added-success/courses-items-added-success.component';

@Component({
  selector: 'app-courses-edit-section',
  templateUrl: './courses-edit-section.component.html',
  styleUrls: ['./courses-edit-section.component.css']
})
export class CoursesEditSectionComponent {
  language = "English";

  constructor(public dialog: MatDialog) {}

  
  openPopup_new(): void {
    const dialogclose=this.dialog.closeAll()
    this.sucesspopup()
  }
  openPopup_new2(): void {
    const dialogclose=this.dialog.closeAll()
  }
  sucesspopup():void{

    const newref=this.dialog.open(CoursesItemsAddedSuccessComponent,{
      width: '40%'
    })
  }

}
