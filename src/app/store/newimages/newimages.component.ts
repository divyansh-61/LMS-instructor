import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewaddfilepopupComponent } from '../newaddfilepopup/newaddfilepopup.component';
import { AddnewdeletpopupComponent } from '../addnewdeletpopup/addnewdeletpopup.component';

@Component({
  selector: 'app-newimages',
  templateUrl: './newimages.component.html',
  styleUrls: ['./newimages.component.css']
})
export class NewimagesComponent {
  language = "English";
  section1: any
  source1 = "Upload";
  filetype1 = "Video";
  primary = "primary";
  panelOpenState = false;
  selected = "All";
  constructor(public dialog: MatDialog) { }




  successpopup(): void {

    const newref = this.dialog.open(NewaddfilepopupComponent, {
      width: '40%'
    })
  }
  deletepopup(): void {
    const newref = this.dialog.open(AddnewdeletpopupComponent, {
      width: '40%'
    })
  }

}
